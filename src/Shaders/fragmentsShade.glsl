// use vaying here from vertex shader

varying vec2 vUv;

uniform float utime;

// loading texture

uniform sampler2D utexture;

void main() {
    vec4 textureColor = texture2D(utexture,vUv);
    //use texture here
    gl_FragColor = textureColor;
    float str = sin(vUv.x*40.0 + utime * 10.0)* 0.5 +0.5; // sliding animation
    // gl_FragColor = vec4(str,str, 0.02, 1.0);

}