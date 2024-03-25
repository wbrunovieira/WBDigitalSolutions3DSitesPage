import * as THREE from 'three';
import App from './App';

export default class Renderer {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.camera = this.app.camera;
    this.scene = this.app.scene;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    this.instance.setSize(window.innerWidth, window.innerHeight);
    this.instance.setPixelRatio(window.devicePixelRatio, 2);
  }

  loop() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
