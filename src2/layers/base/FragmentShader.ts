export const FragmentShader = `
    varying vec3 vUv;
    uniform float lightIntensity;
    uniform float pixels;
    uniform float rotation;
    uniform vec2 light_origin;
    uniform float time_speed;
    float dither_size = 2.0;
    float light_border_1 = 0.4;
    float light_border_2 = 0.6;
    uniform vec4 color1;
    uniform vec4 color2;
    uniform vec4 color3;
    float size = 10.0;
    int OCTAVES = 20;
    bool should_dither = true;
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

    void main() {
        vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;

        // check distance from center & distance to light
        float d_circle = distance(uv, vec2(0.5));
        float d_light = distance(uv , vec2(light_origin));
        // cut out a circle
        // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
        float a = step(d_circle, 0.49999);
        
        bool dith = dither(uv ,vUv.xy);
        uv = rotate(uv, rotation);

        // get a noise value with light distance added
        // this creates a moving dynamic shape
        float fbm1 = fbm(uv);
        d_light += fbm(uv*size+fbm1+vec2(time*0.1+time_speed, 0.0))*lightIntensity;
        
        // size of edge in which colors should be dithered
        float dither_border = (1.0/pixels)*dither_size;

        // now we can assign colors based on distance to light origin
        vec4 col = color1;
        if (d_light > light_border_1) {
            col = color2;
            if (d_light < light_border_1 + dither_border && (dith || !should_dither)) {
                col = color1;
            }
        }
        if (d_light > light_border_2) {
            col = color3;
            if (d_light < light_border_2 + dither_border && (dith || !should_dither)) {
                col = color2;
            }
        }
        
        gl_FragColor = vec4(col.rgb, a * col.a);
    }
`;