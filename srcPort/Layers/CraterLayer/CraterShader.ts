import Uniforms from "../../Common/Shaders/Uniforms"
import Common from "../../Common/Shaders/Common"

export default /* glsl */`
${Uniforms}
uniform vec4 color1;
uniform vec4 color2;

${Common}

float crater(vec2 uv) {
    float c = 1.0;
    for (int i = 0; i < 2; i++) {
        c *= circleNoise((uv * size) + (float(i+1)+10.) + vec2((time*0.1)+time_speed,0.0));
    }
    return 1.0 - c;
}

void main() {
    vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;

    // check distance from center & distance to light
    float d_circle = distance(uv, vec2(0.5));
    float d_light = distance(uv , vec2(light_origin));
    // cut out a circle
    // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
    float a = step(d_circle, 0.49999);
    
    uv = rotate(uv, rotation);
    uv = spherify(uv);
        
    float c1 = crater(uv );
    float c2 = crater(uv +(light_origin-0.5)*0.04);
    vec4 col = color1;
    
    a *= step(0.5, c1);
    if (c2<c1-(0.5-d_light)*2.0) {
        col = color2;
    }
    if (d_light > light_border_1) {
        col = color2;
    } 

    // cut out a circle
    a*= step(d_circle, 0.5);
    
    gl_FragColor = vec4(col.rgb, a * col.a);
}`;