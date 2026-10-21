// For environmental map we use a loader (rgbe loader)

import * as THREE from 'three'
import { HDRLoader, RGBELoader } from 'three/examples/jsm/Addons.js'
import { scene } from './main';

export const rgbeLoader = new HDRLoader();
// in update version we use HDRLoader instead of rgbeLoader

rgbeLoader.load('./Env1.hdr',(Envmap)=>{
Envmap.mapping = THREE.EquirectangularReflectionMapping;
scene.background = Envmap;
scene.environment = Envmap;

},
()=>{
    console.log('env on progress');
    
},
()=>{
    console.log('Env Error');
    
})