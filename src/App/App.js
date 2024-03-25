import * as THREE from 'three';
import Camera from './Camera';

let instance = null;

export default class App {
  constructor() {
    if (!instance) return instance;
    instance = this;

    const canvas = document.createElement('canvas.threejs');
    const scene = new THREE.Scene();
    const camera = new Camera();
  }
}
