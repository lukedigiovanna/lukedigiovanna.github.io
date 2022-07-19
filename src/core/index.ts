import * as GL from './webgl';

const vsSource = `
    attribute vec4 vertexPosition;
    varying vec2 vPos;

    void main() {
        vPos = vertexPosition.xy;
        gl_Position = vertexPosition;
    }
`

const fsSource = `
    uniform highp float t;
    varying highp vec2 vPos;

    uniform highp float scale;
    uniform highp vec2 centerPosition;

    const mediump float maxIterations = 512.0;

    void main() {
        highp vec2 c = vPos * scale + centerPosition; // transform the coord
        highp vec2 z = c;
    
        mediump float i;
        for (mediump float iterations = 1.0; iterations < maxIterations; iterations++) {
            i = iterations;
            z = vec2(z.x * z.x - z.y * z.y + c.x, 2.0 * z.x * z.y + c.y);
            if (dot(z, z) > 4.0) {
                break;
            }
        }
    
        mediump float n = i * 50.0 / maxIterations;
    
        gl_FragColor = vec4(sin(n), sin(n + 2.45), sin(n + 5.45), 1.0);
    }
`

class Core {
    private canvas: any = null;
    private gl: any = null;
    private initialized: boolean = false;
    private shaderProgram: any = null;
    private programInfo: any = null;
    private buffers: any = null;

    constructor() {
        this.render = this.render.bind(this);
    }

    public setCanvas(canvas: HTMLCanvasElement | null): void {
        if (!this.initialized) {
            this.canvas = canvas;
            if (this.canvas) {
                this.gl = this.canvas.getContext('webgl');
                if (this.gl) {
                    this.shaderProgram = GL.initShaderProgram(this.gl, vsSource, fsSource);
                    this.programInfo = {
                        program: this.shaderProgram,
                        attribLocations: {
                            vertexPosition: this.gl.getAttribLocation(this.shaderProgram, 'vertexPosition'),
                        },
                        uniformLocations: {
                            tPosition: this.gl.getUniformLocation(this.shaderProgram, 't'),
                            scalePosition: this.gl.getUniformLocation(this.shaderProgram, 'scale'),
                            centerPosition: this.gl.getUniformLocation(this.shaderProgram, 'centerPosition'),
                        },
                    }
                    this.buffers = GL.initBuffers(this.gl);
                    this.initialized = true;
                }
            }
        }
    }

    private updateCanvasDimensions() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }

    public render() {
        this.updateCanvasDimensions();
        if (this.initialized) {
            this.gl.useProgram(this.shaderProgram);
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            this.gl.uniform1f(this.programInfo.uniformLocations.tPosition, Math.sin(Date.now() / 1000) * 0.5 + 0.5);
            this.gl.uniform1f(this.programInfo.uniformLocations.scalePosition, (Math.sin(Date.now() / 1000 * 2) * 0.5 + 0.5));
            this.gl.uniform2f(this.programInfo.uniformLocations.centerPosition, -0.13856524454488, -0.64935990748190);
            GL.drawScene(this.gl, this.programInfo, this.buffers)
        }

        window.requestAnimationFrame(this.render);
    }
}

export default new Core();