// ​‌‌⁡⁣⁢⁢​‌‍‌‍----------------​⁡ ⁡⁢⁣⁢​‌‌‍𝗟𝗶𝗴𝗵𝘁𝗶𝗻𝗴​⁡ ⁡⁣⁢​‌‍‌⁡⁣⁢⁢-------------​⁡
// Types 1) ⁡⁢⁢⁣Ambient⁡ 2) ⁡⁢⁢⁣Directinal⁡ 3) Point Light 4) Spot 5) Hemisphere 6) RectArea

// We will use meshStandardMaterial as its works like real its work with light

import * as THREE from "three";


let LightingComp = 'Lighting';

// const scene = new THREE.Scene();

// Lights

// ​‌‌‍⁡⁢⁣⁢𝗔𝗺𝗯𝗶𝗲𝗻𝘁 𝗟𝗶𝗴𝗵𝘁⁡​
// ⁡⁢⁢⁣pasing two parameters light color and denstiy⁡
// ⁡⁢⁢⁣ambient light pass rays  from all direction⁡
export const ambientLight = new THREE.AmbientLight('#FFFFFF',0.5)


// ⁡⁢⁣⁢​‌‌‍𝗗𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻𝗮𝗹 𝗟𝗶𝗴𝗵𝘁 ​⁡

export const directionlLight = new THREE.DirectionalLight('#ffffff',3)

directionlLight.position.set(2,2,1)

// ​‌‍‌𝗗𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻𝗮𝗹 𝗟𝗶𝗴𝗵𝘁 𝗛𝗲𝗹𝗽𝗲𝗿​

export const directionlLightHelper = new THREE.DirectionalLightHelper(directionlLight,0.2);

// all other types are using still the same way and also helper are use the same way






// we have to add light also in scence






export default LightingComp;

