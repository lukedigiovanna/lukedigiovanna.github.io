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

    private lines: THREE.Line[] = [];

    private depth: number = 100;

    constructor(canvas: HTMLCanvasElement) {
        console.log("Constructed the engine");

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', () => {
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        this.camera.position.y = 3;

        const step = 0.2;
        const width = 10;
        for (let z = 0; z <= this.depth; z+=step) {
            const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
            const points = [];
            for (let x = -width; x <= width; x+=step) {
                let y = Math.cos(x) * Math.cos(z) + Math.random() * 0.1;
                points.push(new THREE.Vector3(x, y, 0));
            }
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial);
            line.position.z = -z;
            this.scene.add(line);
            this.lines.push(line);
        }

        // add a large plane
        const planeGeometry = new THREE.PlaneGeometry(100, 100);
        const planeMaterial = new THREE.MeshBasicMaterial({color: 0x0d24d6});
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -2;
        // this.scene.add(plane);

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

        this.lines.forEach(line => {
            // const positions = line.geometry.attributes.position;
            // const points = Array.from(Array(positions.count).keys()).map((i: number, index: number) => new THREE.Vector3(positions.getX(i), positions.getY(i) + (Math.random() * 2 - 1) * 0.01, positions.getZ(i)));
            // line.geometry.setFromPoints(points);
            line.position.z += 0.025;
            if (line.position.z > 0) {
                line.position.z = -this.depth;
            }
        } );

        this.camera.lookAt(0, 0, -5);
        // this.camera.position.set(Math.cos(Date.now() / 5000) * 6, 4, Math.sin(Date.now() / 5000) * 6);
    }
}

export default Engine;