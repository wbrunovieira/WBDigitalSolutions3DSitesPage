import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import App from './App';
export default class Camera {
  constructor() {
    this.app = new App();
    this.canvas = this.app.canvas;
    this.setInstance();
    this.setControls();
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.instance.position.z = 5;
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, document.body);
    this.controls.enableDamping = true;
  }
}
