
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vp;
varying vec3 vPositionNormal;
varying vec3 vWorldPosition;
varying vec3 vWorldNormal;

void main(void){
  vUv = uv;
  vNormal = normalize( normalMatrix * normal ); // 转换到视图空间
  vp = position;
  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);

  // World space position and normal for lighting
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}