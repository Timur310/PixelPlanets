export default /* glsl */`
varying vec3 vUv;
uniform float seed;
uniform float time;
uniform float lightIntensity;
uniform float pixels;
uniform float size;
uniform float rotation;
uniform vec2 light_origin;
uniform float time_speed;
uniform float dither_size;
uniform int OCTAVES;
uniform bool should_dither;
`;