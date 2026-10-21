uniform float utime;
void main() {
    vec3 newPosition = position;
    // newPosition.x += 2.0;
    // newPosition.y += -0.1;
    // newPosition.z += -2;
    // newPosition.z += newPosition.x + newPosition.y;
    newPosition.z +=  sin(newPosition.x * 4.0 + utime*2.1 );
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);


}
