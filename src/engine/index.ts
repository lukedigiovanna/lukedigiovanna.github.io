import { Creature } from "./Creature";
import { Camera } from "./Camera";

class Prop {
    constructor() {
        
    }
}

class InsectsEngine {
    private creatures: Creature[] = [];
    private lastRenderTime: number;
    private simulationTime: number; // elapsed wall-clock time of simulation

    private camera: Camera;

    constructor() {
        this.lastRenderTime = -1;
        this.simulationTime = 0;

        this.creatures.push(new Creature(0, 0, 0.05, 5));

        window.addEventListener("mousemove", (ev) => {
            const target = { 
                x: this.camera.screenToWorldX(ev.x), 
                y: this.camera.screenToWorldY(ev.y)
            };
            this.creatures[0].target = target
            console.log(target);
        });

        this.camera = new Camera();
    }

    render(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const currentTime = (new Date()).getTime();
        const dt = this.lastRenderTime < 0 ? 0 : (currentTime - this.lastRenderTime) / 1000;
        this.simulationTime += dt;
        this.lastRenderTime = currentTime;
        ctx.fillStyle = "#ad7832";
        ctx.fillRect(0, 0, width, height);

        this.camera.context = ctx;
        this.camera.setTargetDimensions(width, height);
        this.camera.y = -window.scrollY / height * this.camera.scaleHeight;

        for (const creature of this.creatures) {
            creature.update(dt, width, height);
            creature.render(this.camera);
        }

        this.camera.fillStyle = "blue";
        this.camera.fillCircle(0,0,0.25);

        for (let i = -5; i <= 5; i++) {
            this.camera.strokeStyle = 'gray';
            this.camera.lineWidth = i === 0 ? 3 : 1;
            this.camera.line(i,5,i,-5);
            this.camera.line(5,i,-5,i);
        }
    }
}

const engine = new InsectsEngine();

export default engine;
