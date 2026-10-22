// ​‌‍‌⁡⁢⁣⁢Uniform⁡​
// use to updated values in gpu suing javascript 
// uniform are used for updating value in gpu
// to update in gpu we use unifrom in javascript and declare it in glsl 

// ⁡⁢⁣⁢​‌‍‌Varying​⁡
//A varying is a variable used to pass data from the vertex shader to the fragment shader.
// ⁡⁢⁢⁣​‌‍‌1. Why do we need a varying?​⁡
// Imagine you create a sphere in Three.js and want to give it a gradient color.

// The vertex shader knows information about each vertex, such as its position and UV coordinates. But the fragment shader needs information for the many fragments covering the sphere's surface.

// Uniform declare
uniform float utime;
 // varying

 varying vec2 vUv;


void main() {
    vec3 newPosition = position;

    vUv = uv;
    vUv.x+=0.5;
    vUv.y+=0.5;
    float dist = distance(uv,vec2(0.3));

    newPosition.z += sin(dist*3.0 - utime*6.0 )*0.3;
    // newPosition.x += 2.0;
    // newPosition.y += -0.1;
    // newPosition.z += -2;
    // newPosition.z += newPosition.x + newPosition.y;
    // newPosition.z +=  sin(newPosition.x * 10.0 + utime*3.1 );
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
    vUv=uv;


}
