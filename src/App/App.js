import * as THREE from 'three';
import Camera from './Camera';
import Renderer from './Render';

import Loop from './Utils/Loop';

let instance = null;

export default class App {
  constructor() {
    if (!instance) return instance;
    instance = this;

    this.canvas = document.createElement('canvas.threejs');
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.loop = new Loop();
  }
}
