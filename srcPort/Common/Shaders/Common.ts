export default `
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

float circleNoise(vec2 uv) {
  float uv_y = floor(uv.y);
  uv.x += uv_y*.31;
  vec2 f = fract(uv);
  float h = rand(vec2(floor(uv.x),floor(uv_y)));
  float m = (length(f-0.25-(h*0.5)));
  float r = h*0.25;
  return smoothstep(0.0, r, m*0.75);
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

bool dither(vec2 uv1, vec2 uv2) {
  return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
}
`;