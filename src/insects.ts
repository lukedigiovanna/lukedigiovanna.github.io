
interface Segment {
    x: number;
    y: number;
    r: number;
}

interface Position {
    x: number;
    y: number;
}

class Creature {
    public readonly segments: Segment[] = [];

    private _target: Position | null = null;
    private speed: number = 200;

    constructor(x: number, y: number, r: number, numSegments: number) {
        for (let i = 0; i < numSegments; i++) {
            this.segments.push({
                x: x + i * r,
                y: y,
                r: r
            });
        }
    }

    public set target(pos: Position | null) {
        this._target = pos;
    }

    private relax() {
        for (let i = 0; i < this.segments.length - 1; i++) {
            // constrain i to i + 1
            const s0 = this.segments[i];
            const s1 = this.segments[i + 1];
            let dx = s1.x - s0.x;
            let dy = s1.y - s0.y;
            // normalization step
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            dx = dx / magnitude * s0.r;
            dy = dy / magnitude * s0.r;
            // move s1 to match this.
            s1.x = s0.x + dx;
            s1.y = s0.y + dy;
        }
    }

    update(dt: number, width: number, height: number) {
        // if (Math.random() < dt) {
        //     this.target = {
        //         x: Math.random() * width,
        //         y: Math.random() * height
        //     };
        // }

        if (this._target) {
            const s0 = this.segments[0];
            const dx = this._target.x - s0.x;
            const dy = this._target.y - s0.y;
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            s0.x += dx / magnitude * this.speed * dt;
            s0.y += dy / magnitude * this.speed * dt;
        }
        this.relax();
    }

    render(ctx: CanvasRenderingContext2D) {
        for (const s of this.segments) {
            ctx.strokeStyle = "#eee";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}

class InsectsEngine {
    private creatures: Creature[] = [];
    private lastRenderTime: number;
    private simulationTime: number; // elapsed wall-clock time of simulation

    constructor() {
        this.lastRenderTime = -1;
        this.simulationTime = 0;

        this.creatures.push(new Creature(250, 250, 10, 100));

        window.addEventListener("mousemove", (ev) => {
            // this.creatures[0].segments[0].x = ev.x;
            // this.creatures[0].segments[0].y = ev.y;
            this.creatures[0].target = { x: ev.x, y: ev.y };
        })
    }

    render(ctx: CanvasRenderingContext2D, width: number, height: number) {
        const currentTime = (new Date()).getTime();
        const dt = this.lastRenderTime < 0 ? 0 : (currentTime - this.lastRenderTime) / 1000;
        this.simulationTime += dt;
        this.lastRenderTime = currentTime;
        ctx.fillStyle = "#050e26";
        ctx.fillRect(0, 0, width, height);

        for (const creature of this.creatures) {
            creature.update(dt, width, height);
            creature.render(ctx);
        }
    }
}

const engine = new InsectsEngine();

export default engine;
