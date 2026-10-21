// ​‌‍// ⁡⁢⁣⁢𝟯𝗱 𝗺𝗼𝗱𝗲𝗹
// 𝗜𝗺𝗽𝗼𝗿𝘁𝗶𝗻𝗴 𝟯𝗱 𝗺𝗼𝗱𝗲𝗹
// 𝘄𝗲 𝘄𝗶𝗹𝗹 𝘁𝗮𝗸𝗲 𝟯𝗱 𝗺𝗼𝗱𝗲𝗹 𝗳𝗿𝗼𝗺 𝘀𝗳𝗼𝘁𝘄𝗮𝗿𝗲 𝗹𝗶𝗸𝗲 𝗯𝗹𝗶𝗻𝗱𝗲𝗿
// 𝘄𝗲 𝘄𝗶𝗹𝗹 𝗲𝘅𝗽𝗼𝗿𝘁 𝟯𝗱 𝗺𝗼𝗱𝗲𝗹 𝗳𝗿𝗼𝗺 𝘀𝗼𝗳𝘁𝘄𝗮𝗿 𝗮𝗻𝗱 𝗶𝗺𝗽𝗼𝗿𝘁 𝗶𝘁 𝘁𝗼 𝗵𝗲𝗿𝗲 ⁡​
// extension .gltf , .glb and some more

import * as THREE from "three";
import { GLTFExporter, GLTFLoader } from "three/examples/jsm/Addons.js";
// import { scene } from "./main";

let model = "3d model";

const gltbLoader = new GLTFLoader();

export let mixer;

gltbLoader.load(
  "./model.glb",
  (gltf) => {
    const models = gltf.scene;
    models.scale.set(0.2, 0.2, 0.2);
    if (gltf.animations && gltf.animations.length) {
      console.log(gltf.animations, "Length", gltf.animations.length);
      mixer = new THREE.AnimationMixer(models);

      const actions = mixer.clipAction(gltf.animations[3]);

      // we have to update mixer in animate funstion
    //   actions.play();
    }

    const death = THREE.AnimationClip.findByName(gltf.animations, "Death");

    if(death){
        const deathAction = mixer.clipAction(death)
        deathAction.play();
    }

    scene.add(models);
    console.log("Model Loded");
    // console.log(gltf)
  },
  () => {
    console.log("Model Loading");
  },
  () => {
    console.log("Model error");
  },
);

gltbLoader.sc;

export default model;
