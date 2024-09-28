import { Position } from "./models";

class Camera {
    private position: Position;
    public scaleHeight: number;

    private ctx: CanvasRenderingContext2D | null = null;

    private targetWidth: number;
    private targetHeight: number;

    constructor() {
        this.position = {x: 0, y: 0};
        this.scaleHeight = 10;
        this.targetWidth = 1;
        this.targetHeight = 1;
    }

    setTargetDimensions(targetWidth: number, targetHeight: number) {
        this.targetWidth = targetWidth;
        this.targetHeight = targetHeight;
    }

    set context(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    set x(x: number) {
        this.position.x = x;
    }

    set y(y: number) {
        this.position.y = y;
    }

    // wrap context functions
    set fillStyle(fillStyle: string) {
        if (this.ctx) this.ctx.fillStyle = fillStyle;
    }

    set strokeStyle(strokeStyle: string) {
        if (this.ctx) this.ctx.strokeStyle = strokeStyle;
    }

    set lineWidth(lineWidth: number) {
        if (this.ctx) this.ctx.lineWidth = lineWidth;
    }

    beginPath() {
        this.ctx?.beginPath();
    }

    closePath() {
        this.ctx?.closePath();
    }

    stroke() {
        this.ctx?.stroke();
    }

    fill() {
        this.ctx?.fill();
    }

    // position based functions

    get scaleWidth() {
        return this.targetWidth / this.targetHeight * this.scaleHeight;
    }

    worldToScreenX(wx: number): number {
        const lx = this.position.x - this.scaleWidth / 2;
        const dx = wx - lx;
        return dx / this.scaleWidth * this.targetWidth;
    }

    worldToScreenY(wy: number): number {
        const by = this.position.y - this.scaleHeight / 2;
        const dy = this.scaleHeight - wy + by;
        return dy / this.scaleHeight * this.targetHeight;
    }

    worldToScreenSize(r: number): number {
        return r / this.scaleHeight * this.targetHeight;
    }

    screenToWorldX(sx: number): number {
        const lx = this.position.x - this.scaleWidth / 2;
        const dx = sx / this.targetWidth * this.scaleWidth;
        return lx + dx;
    }

    screenToWorldY(sy: number): number {
        const by = this.position.y - this.scaleHeight / 2;
        const dy = (this.targetHeight - sy) / this.targetHeight * this.scaleHeight;
        return by + dy;
    }

    // path drawing functions

    arc(x: number, y: number, r: number, start: number=0, end: number=Math.PI * 2) {
        this.ctx?.arc(this.worldToScreenX(x), this.worldToScreenY(y), this.worldToScreenSize(r), start, end);
    }

    moveTo(x: number, y: number) {
        this.ctx?.moveTo(this.worldToScreenX(x), this.worldToScreenY(y));
    }

    lineTo(x: number, y: number) {
        this.ctx?.lineTo(this.worldToScreenX(x), this.worldToScreenY(y));
    }

    // shape drawing functions

    fillCircle(x: number, y: number, r: number) {
        if (this.ctx) {
            this.beginPath();
            this.arc(x, y, r);
            this.fill();
        }
    }

    strokeCircle(x: number, y: number, r: number) {
        if (this.ctx) {
            this.beginPath();
            this.arc(x, y, r);
            this.stroke();
        }
    }

    line(x0: number, y0: number, x1: number, y1: number) {
        if (this.ctx) {
            this.beginPath();
            this.moveTo(x0, y0);
            this.lineTo(x1, y1);
            this.stroke();
        }
    }
}

export { Camera };