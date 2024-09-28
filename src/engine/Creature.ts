import { Position, Segment } from "./models";
import { Camera } from "./Camera";

class Creature {
    public readonly segments: Segment[] = [];

    private _target: Position | null = null;
    private speed: number = 1;

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
        if (this._target !== null) {
            const s0 = this.segments[0];
            const dx = this._target.x - s0.x;
            const dy = this._target.y - s0.y;
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            if (magnitude >= 0.05) {
                s0.x += dx / magnitude * this.speed * dt;
                s0.y += dy / magnitude * this.speed * dt;
            }
        }
        this.relax();
    }

    render(camera: Camera) {
        let px1, py1, px2, py2;
        for (let i = 0; i < this.segments.length; i++) {
            const s = this.segments[i];
            if (true || i === 0 || i === this.segments.length - 1) {
                camera.strokeStyle = "#eee";
                camera.fillStyle = "blue";
                camera.lineWidth = 3;
                camera.beginPath();
                camera.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                camera.fill();
                camera.stroke();
                camera.closePath();
            }
            let ps;
            if (i > 0) {
                ps = this.segments[i - 1];
            }
            else {
                ps = this.segments[i + 1];
            }
            // take the normal to the ps
            const dx = ps.x - s.x;
            const dy = ps.y - s.y;
            // magnitude should always be sum of radii
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            const nx = -dy / magnitude * s.r;
            const ny = dx / magnitude * s.r;
            camera.fillStyle = "red";
            camera.strokeStyle = "white";
            let npx1 = s.x + nx;
            let npy1 = s.y + ny;
            let npx2 = s.x - nx;
            let npy2 = s.y - ny;
            if (px1 && py1 && px2 && py2) {
                camera.lineWidth = 3;
                camera.beginPath();
                camera.moveTo(px1, py1);
                camera.lineTo(npx1, npy1);
                camera.stroke();
                camera.closePath();
                camera.beginPath();
                camera.lineTo(npx2, npy2);
                camera.lineTo(px2, py2);
                camera.lineTo(px1, py1);
                camera.stroke();
                camera.fill();
                camera.closePath();
            }
            px1 = npx1;
            py1 = npy1;
            px2 = npx2;
            py2 = npy2;
        }
    }
}

export { Creature };