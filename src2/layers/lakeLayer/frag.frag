varying vec3 vUv;
uniform float lightIntensity;
uniform float rotation;
uniform vec2 light_origin;
uniform float time_speed;
float light_border_1 = 0.4;
float light_border_2 = 0.6;
uniform float lake_cutoff;

uniform vec4 color1;
uniform vec4 color2;
uniform vec4 color3;

float pixels = 100.0;
float size = 10.0;
int OCTAVES = 4;
uniform float seed;
uniform float time;

float rand(vec2 coord) {
    coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
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

bool dither(vec2 uv1, vec2 uv2) {
    return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
}

vec2 rotate(vec2 coord, float angle){
    coord -= 0.5;
    coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
    return coord + 0.5;
}

vec2 spherify(vec2 uv) {
    vec2 centered= uv *2.0-1.0;
    float z = sqrt(1.0 - dot(centered.xy, centered.xy));
    vec2 sphere = centered/(z + 1.0);
    return sphere * 0.5+0.5;
}


void main() {
    // pixelize uv
    vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
    
    float d_light = distance(uv , vec2(light_origin));
    
    // give planet a tilt
    uv = rotate(uv, rotation);

    // map to sphere
    uv = spherify(uv);
    
    // some scrolling noise for landmasses
    float lake = fbm(uv*size+vec2(time*time_speed,0.0));

    vec4 col = color1;
    if (d_light > light_border_1) {
        col = color2;
    }
    if (d_light > light_border_2) {
        col = color3;
    }
    
    float a = step(lake_cutoff, lake);
    a *= step(distance(vec2(0.5), uv), 0.5);
    gl_FragColor = vec4(col.rgb, a * col.a);
}