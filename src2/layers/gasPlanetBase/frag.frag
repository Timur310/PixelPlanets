varying vec3 vUv;
float pixels = 100.0;
uniform float cloud_cover;
uniform vec2 light_origin;
uniform float time_speed;
uniform float stretch;
uniform float cloud_curve;
float light_border_1 = 0.4;
float light_border_2 = 0.6;
uniform float rotation;

uniform vec4 base_color;
uniform vec4 outline_color;
uniform vec4 shadow_base_color;
uniform vec4 shadow_outline_color;

float size = 9.0;
int OCTAVES = 5;
uniform float seed;
uniform float time;


float rand(vec2 coord) {
    coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
    return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
}

float noise(vec2 coord){
    vec2 i = floor(coord);
    vec2 f = fract(coord);
    
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));

    vec2 cubic = f * f * (3.0 - 2.0 * f);

    return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
}

float circleNoise(vec2 uv) {
    float uv_y = floor(uv.y);
    uv.x += uv_y*.31;
    vec2 f = fract(uv);
    float h = rand(vec2(floor(uv.x),floor(uv_y)));
    float m = (length(f-0.25-(h*0.5)));
    float r = h*0.25;
    return smoothstep(0.0, r, m*0.75);
}

float fbm(vec2 coord){
    float value = 0.0;
    float scale = 0.5;

    for(int i = 0; i < OCTAVES ; i++){
        value += noise(coord) * scale;
        coord *= 2.0;
        scale *= 0.5;
    }
    return value;
}

float cloud_alpha(vec2 uv) {
    float c_noise = 0.0;
    
    // more iterations for more turbulence
    for (int i = 0; i < 9; i++) {
        c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
    }
    float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
    
    return fbm;
}

vec2 spherify(vec2 uv) {
    vec2 centered= uv *2.0-1.0;
    float z = sqrt(1.0 - dot(centered.xy, centered.xy));
    vec2 sphere = centered/(z + 1.0);
    return sphere * 0.5+0.5;
}

vec2 rotate(vec2 coord, float angle){
    coord -= 0.5;
    coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
    return coord + 0.5;
}

void main() {
    // pixelize uv
    vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
    
    // distance to light source
    float d_light = distance(uv , light_origin);
    
    // cut out a circle
    float d_circle = distance(uv, vec2(0.5));
    // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
    float a = step(d_circle, 0.49999);
    
    uv = rotate(uv, rotation);
    
    // map to sphere
    uv = spherify(uv);
    
    // slightly make uv go down on the right, and up in the left
    uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
    
    float c = cloud_alpha(uv*vec2(1.0, stretch));
    
    // assign some colors based on cloud depth & distance from light
    vec4 col = base_color;
    if (c < cloud_cover + 0.03) {
        col = outline_color;
    }
    if (d_light + c*0.2 > light_border_1) {
        col = shadow_base_color;

    }
    if (d_light + c*0.2 > light_border_2) {
        col = shadow_outline_color;
    }
    gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
}