/*
    const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;
*/

import * as THREE from 'three';

class Engine {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;

    constructor() {
        console.log("Constructed the engine");

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.zIndex = '-10';

        // for (let i = 0; i < 10; i++) {
        //     const geometry = new THREE.BoxGeometry(1, 1, 1);
        //     const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        //     const cube = new THREE.Mesh(geometry, material);
        //     cube.position.x = i * 2 - 10;
        //     this.scene.add(cube);
        // }

        const step = 0.2;
        const size = 50;
        for (let x = -size; x <= size; x+=step) {
            const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
            const points1 = [], points2 = [];
            for (let z = -size; z <= size; z+=step) {
                // let y = Math.cos(x + z) + (Math.random() * 2 - 1) * 0.3;
                let y = Math.cos(x) * Math.cos(z) + Math.random() * 0.1;
                points1.push(new THREE.Vector3(x, y, z));
                points2.push(new THREE.Vector3(z, y, x));
            }
            const line1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points1), lineMaterial);
            this.scene.add(line1);
            const line2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points2), lineMaterial);
            this.scene.add(line2);

        }

        // set up skybox.
        {
            const loader = new THREE.CubeTextureLoader();
            const texture = loader.load([
                require('./assets/images/space/px.png'),
                require('./assets/images/space/nx.png'),
                require('./assets/images/space/py.png'),
                require('./assets/images/space/ny.png'),
                require('./assets/images/space/pz.png'),
                require('./assets/images/space/nz.png'),
              ]);
            this.scene.background = texture;
          }

        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);

        this.camera.lookAt(0, 0, 0);
        this.camera.position.set(Math.cos(Date.now() / 5000) * 6, 4, Math.sin(Date.now() / 5000) * 6);
    }
}

export default Engine;