import { all, color, texture, time } from "three/tsl";
import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";
import a from "./Filtering.js";
import {
  ambientLight,
  directionlLight,
  directionlLightHelper,
} from "./Lighting.js";
// import model, { mixer } from "./3Dmodel.js";

import alltex from "./textures.js";
import { planGeometry, shadematerial } from "./Shaders.js";
// import { rgbeLoader } from "./EnvironmentalMaps.js";

// console.log(alltex)

// GUI DEBUG
const gui = new GUI();

// make the 3d page responisve
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// first step is to make a scence

export const scene = new THREE.Scene();

// New way to make animation same for all type of fps

const timer = new THREE.Timer();

// 2nd make a 3d object  which is called mesh
// mesh has 2 things geometry and material
// in mesh we have to first create geometry

//Geometry defines the shape of a 3D object.

// box
const geometery = new THREE.BoxGeometry(1, 1, 1); // x-axis, y-axis, z-axis // we have to pass width depth andheight

//sphere

const Geometrysphere = new THREE.SphereGeometry(15, 32, 16);

// Custom Geometry

//! const customgeometry = new THREE.BufferGeometry();

//! const count = 10; // trainagles count

//! const positionArray = new Float32Array(count * 3 * 3); // edges and vertices

//! for (let i = 0; i < count * 3 * 3; i++) {
//!   positionArray[i] = Math.random() - 0.5 * 4; // it gives random value between -4 to 4 }

//! customgeometry.setAttribute(
//!   "position",
//!   new THREE.BufferAttribute(positionArray, 3), );

// after geometry we have to create materials

// What is MeshBasicMaterial?
// MeshBasicMaterial is a material that displays its color without needing lights.

// Geometry defines the shape; material defines its appearance.

// const material = new THREE.MeshBasicMaterial({
// color: 0xff0000,
// wireframe: true,
// map: alltex.marbleTex,
// });
// or '#ff0000'  // pass color for material

const Standmaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  //chnage envirnmental light intensity
  envMapIntensity: 50,
  metalness: 1,
  roughness: 0.001,
});

// now we create a mesh which is known as cube
//A mesh combines geometry and material to create a visible 3D object.

// const cube = new THREE.Mesh(geometery, material); // we pass geometery and materail here

// sphere
//! const sphere = new THREE.Mesh(Geometrysphere, material);
//! const custom = new THREE.Mesh(customgeometry, material);

// StandardMaterial

// const cube = new THREE.Mesh(geometery, Standmaterial);
const cube = new THREE.Mesh(planGeometry, shadematerial);

// Tranformation of object

//! cube.position.x = 20;
//! cube.position.y = -2
// cube.position.z = -2.6;

// to set all axis in one line
// cube.position.set(0, 0, 0); // x-axis,y-axis, z-axis

//scaling: changing size of object

//! cube.scale.x = 1;
//! cube.scale.y = 2;
//! cube.scale.z = 2;
//  to set all axis in one line

//! cube.scale.set(x,y,z)

//Rotation
// rotation are use radian unit pi/2 = 90*
// convert radian to degree pi/2 * 180/pi
//! cube.rotation.y = Math.PI / 4; // pi/3*180/pi = ()degree

// now this is a 3d object

// we have created a scene and object now we have pass object in scene

scene.add(cube); // it will placed object in scene
//! scene.add(custom);
// scene.add(ambientLight)
scene.add(directionlLight);

// Directional Light Helper

scene.add(directionlLightHelper);

// Show the X, Y, and Z axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

////!  ​‌‍‌𝗥𝗲𝗱 = 𝗫-𝗮𝘅𝗶𝘀​
// ​‌‍‌⁡⁢⁢⁢𝗚𝗿𝗲𝗲𝗻 = 𝗬-𝗮𝘅𝗶𝘀⁡​
// ⁡⁣⁢​‌‍‌⁢𝗕𝗹𝘂𝗲 = 𝗭-𝗮𝘅𝗶𝘀⁡​

// const gridHelper = new THREE.GridHelper(10, 10);
// scene.add(gridHelper);

// now we create camera for watching the scene

const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.1,
  100,
);

// Camera LookAt function
// it locks camera on one point

camera.lookAt(0, 0, 0);
camera.position.set(0, 0, 5);
//! const camera = new THREE.OrthographicCamera(-4, 4, 4, -4, 0.5, 100);

// camera.position.z = 4;
// camera.position.y = 1;
// camera.position.x = 1;
// arguments describe how camera is fit for scene how scene will be look 0.1 and 100 is the limit for
// how mych near the object will looks and how much far the object will looks
// 0.1 is the near object limitt
// 100 is the how far the object limit
// if the object and camera got near and cross the 0.1 limit the object will disappear
//if the object and camera got far and cross the 100 limit the objcet will disapear

// rendrer
const canvas = document.querySelector("#webgl");

const renderer = new THREE.WebGLRenderer({ canvas });
// Set the size immediately when the page loads
renderer.setSize(size.width, size.height);

// orbitalcontrols
const controls = new OrbitControls(camera, renderer.domElement);

// set size for rendering

window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  renderer.setSize(size.width, size.height); // it will set size of screen
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
});

// Making dubgging controls

//! gui.add(cube.position, 'x').min(-4).max(4).step(0.1).name('position X');
//! gui.add(cube.position, 'y').min(-3).max(3).step(0.1).name('position Y');
//! gui.add(cube.position, 'z').min(-3).max(3).step(0.1).name('position Z');

// color property
const property = {
  color: "#ff0000",
};

gui.addColor(property, "color").onChange(() => {
  material.color.set(property.color);
});

// we can also make a folder structure debug gui

const positionFolder = gui.addFolder("Posotion");
const RotationFolder = gui.addFolder("Rotation");

positionFolder
  .add(cube.position, "x")
  .min(-4)
  .max(4)
  .step(0.1)
  .name("position X");
positionFolder
  .add(cube.position, "y")
  .min(-4)
  .max(4)
  .step(0.1)
  .name("position Y");
positionFolder
  .add(cube.position, "z")
  .min(-4)
  .max(4)
  .step(0.1)
  .name("position Z");

RotationFolder.add(cube.rotation, "x").min(-4).max(4).name("Rotate X");
RotationFolder.add(cube.rotation, "y").min(-4).max(4).name("Rotate Y");
RotationFolder.add(cube.rotation, "z").min(-4).max(4).name("Rotate Z");

// projector is build now we have to play a projector
function animate() {
  timer.update();
  const delta = timer.getDelta();

  //   if (mixer) {
  //   mixer.update(delta);
  // }
  if(shadematerial){
    shadematerial.uniforms.utime.value += delta;
  }
  // controls.update();
  //  cube.rotation.y += delta* 0.9
  //! cube.rotation.x += delta* 0.2
  //!  cube.rotation.z += delta* 0.3

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate();
