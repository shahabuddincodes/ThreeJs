
import * as THREE from "three";
import vertexShade from './Shaders/vertexShade.glsl'
import fragmentsShade from './Shaders/fragmentsShade.glsl'
import alltextures from "./textures";



// Vertex shader

// ​‌‍‌⁡⁢⁢⁣𝘄𝗲 𝗮𝗿𝗲 𝘂𝘀𝗶𝗻𝗴 𝗴𝗹𝘀𝗹 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁 𝗶𝗻𝘀𝘁𝗲𝗮𝗱 𝗼𝗳 𝘁𝗵𝗶𝘀⁡​
// const vertex = `
// void main() {
//     vec3 newPosition = position;
//     // newPosition.x += 2.0;
//     // newPosition.y += -0.1;
//     // newPosition.z += -2;
//     newPosition.z += newPosition.x + newPosition.y;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
// }
// `;

// // Fragment shader
// const fragments = `
// void main() {
//     gl_FragColor = vec4(1.0, 0.0, 6.0, 1.0);
// }
// `;

// Plane 

export const planGeometry = new THREE.PlaneGeometry(2,2,150,150)


// Create the shader material
export const shadematerial = new THREE.ShaderMaterial({
  vertexShader: vertexShade,
  fragmentShader: fragmentsShade,
  side: THREE.DoubleSide,
  uniforms:{
    utime:{value:0},
    utexture : {value: ''}
  }
});
