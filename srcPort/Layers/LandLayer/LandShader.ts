import Uniforms from "../../Common/Shaders/Uniforms"
import Common from "../../Common/Shaders/Common"

export default `
float light_border_1 = 0.4;
float light_border_2 = 0.6;
uniform vec4 col1;
uniform vec4 col2;
uniform vec4 col3;
uniform vec4 col4;
uniform float land_cutoff;
int OCTAVES = 6;
${Uniforms}

${Common}

void main() {
    vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;

    float d_light = distance(uv , light_origin);
    // cut out a circle
    float d_circle = distance(uv, vec2(0.5));
    // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
    float a = step(d_circle, 0.49999);
    
    // give planet a tilt
    uv = rotate(uv, rotation);
    
    // map to sphere
    uv = spherify(uv);
    
    // some scrolling noise for landmasses
    vec2 base_fbm_uv = (uv)*size+vec2(time*time_speed,0.0);
    
    // use multiple fbm's at different places so we can determine what color land gets
    float fbm1 = fbm(base_fbm_uv);
    float fbm2 = fbm(base_fbm_uv - light_origin*fbm1);
    float fbm3 = fbm(base_fbm_uv - light_origin*1.5*fbm1);
    float fbm4 = fbm(base_fbm_uv - light_origin*2.0*fbm1);
    
    // lots of magic numbers here
    // you can mess with them, it changes the color distribution
    if (d_light < light_border_1) {
        fbm4 *= 0.9;
    }
    if (d_light > light_border_1) {
        fbm2 *= 1.05;
        fbm3 *= 1.05;
        fbm4 *= 1.05;
    } 
    if (d_light > light_border_2) {
        fbm2 *= 1.3;
        fbm3 *= 1.4;
        fbm4 *= 1.8;
    } 
    
    // increase contrast on d_light
    d_light = pow(d_light, 2.0)*0.1;
    vec4 col = col4;
    // assign colors based on if there is noise to the top-left of noise
    // and also based on how far noise is from light
    if (fbm4 + d_light < fbm1) {
        col = col3;
    }
    if (fbm3 + d_light < fbm1) {
        col = col2;
    }
    if (fbm2 + d_light < fbm1) {
        col = col1;
    }
    
    gl_FragColor = vec4(col.rgb, step(land_cutoff, fbm1) * a * col.a);
}`;