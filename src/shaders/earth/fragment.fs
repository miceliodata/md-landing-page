uniform vec3 glowColor;
uniform float bias;
uniform float power;
uniform float time;
varying vec3 vp;
varying vec3 vNormal;
varying vec3 vPositionNormal;
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
uniform float scale;
// 获取纹理
uniform sampler2D map;
// 纹理坐标
varying vec2 vUv;

// Lighting uniforms
uniform vec3 directionalLightPosition;
uniform vec3 directionalLightColor;
uniform float directionalLightIntensity;
uniform vec3 ambientLightColor;
uniform float ambientLightIntensity;

void main(void){
  // Get base texture color
  vec4 texColor = texture2D(map, vUv);

  // Calculate directional light (light position is actually the direction FROM the light)
  vec3 lightDir = normalize(directionalLightPosition);
  float diffuse = max(dot(vWorldNormal, lightDir), 0.0);

  // Add some wrap-around lighting to avoid completely black shadows
  diffuse = diffuse * 0.7 + 0.3;

  // Ambient + Diffuse lighting
  vec3 ambient = ambientLightColor * ambientLightIntensity;
  vec3 directional = directionalLightColor * directionalLightIntensity * diffuse;
  vec3 lighting = ambient + directional;

  // Apply lighting to texture
  vec3 litColor = texColor.rgb * lighting;

  // Apply original glow effect (very subtle)
  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );
  if(vp.y > time && vp.y < time + 20.0) {
    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );
    litColor = mix(litColor, glowColor, t * t * 0.15);
  }
  litColor = mix(litColor, glowColor, a * 0.05);

  gl_FragColor = vec4(litColor, 1.0);
}