// ⁡⁣⁢⁢​‌ ​‌‌‍---------------- ⁡⁢⁣⁢𝗙𝗶𝗹𝘁𝗲𝗿𝗶𝗻𝗴⁡ ⁡⁣⁢⁢-------------⁡​

// minification --> ⁡⁢⁢⁡⁢⁢⁣use for zoomed out mean very small size⁡
//magnification --> ⁡⁢⁢⁣use for zoomed in mean very large size⁡

// Texture pixel != geometry Pixel
// we use filtering fot this

// linear filter --> ⁡⁢⁢⁣blury look⁡, Nearest fILTER --> ⁡⁢⁢⁣pixeletal look

import * as THREE from "three";

import alltex from "./textures.js";

let a = "hello";

let marbleFilter = alltex.marbleTex;

// marbleFilter.magFilter = THREE.NearestFilter;
// marbleTexture.minFilter = THREE.LinearFilter;

export default a;
