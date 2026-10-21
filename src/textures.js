import * as THREE from "three";

// Textures
// Textures has 6 types
// color,metalness,roughness , noraml ,displacement , Ao cambient Occlusion

//--------- Texture Loader manager --------------//

const loadingmanager = new THREE.LoadingManager();

loadingmanager.onLoad = () => {
  // when all texture loaded
  console.log("All Textures loaded");
};

// Load texture
const textureloader = new THREE.TextureLoader();

// Load the texture pic
// textureloader has 4 parametrs one is url and 3 callback funcstions

const alltextures = {
  //------------- Texture 1 ---------------//
  texturer: textureloader.load(
    "/Textures/Brick.png",
    // This will run when texture loded
    () => {
      console.log("Texture Loaded ");
    },
    //This will run when texture are loading
    () => {
      console.log("Texture in progress ");
    },
    // run when texture loading have some errors
    () => {
      console.log("Texture Error");
    },
    // we will use this as textureloader manager this is easy way to track texture
  ),

  //------------- Texture 2 ---------------//

  marbleTex: textureloader.load("/Textures/Marbles.jpg"),
};

let marbleTexture = alltextures.marbleTex;

// Set the color space for a color image
marbleTexture.colorSpace = THREE.SRGBColorSpace;

// Set repeating property
// ⁡⁢⁣⁡⁢⁣⁢marble.repeat.x = 3;⁡
// ⁡⁢⁣⁢marble.repeat.y = 2;⁡

// to apply the repeat property

    // X-Axis Repeat
marbleTexture.wrapS = THREE.RepeatWrapping;

    // Y-Axis Repeat
marbleTexture.wrapT = THREE.RepeatWrapping;



export default alltextures;


