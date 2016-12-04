import { IMatrix } from './store';

export interface ILedMatrixOptions {
  x?: number;
  y?: number;
  pixelWidth?: number;
  pixelHeight?: number;
  margin?: number;
  glow?: boolean;
  animated?: boolean;
}

const DEFAULT_OPTS: ILedMatrixOptions = {
  x: 32,
  y: 16,
  pixelWidth: 10,
  pixelHeight: 10,
  margin: 4,
  glow: false,
  animated: false
};

class LedMatrix {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opts: ILedMatrixOptions;
  private data: IMatrix = [];
  private offset = 0;
  private rAF: any;

	constructor(canvas: HTMLCanvasElement, opts: ILedMatrixOptions = {}) {
  	this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  	this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    this.setup();
  }
  
  private setup() {
  	const width = this.opts.x * (this.opts.pixelWidth + this.opts.margin);
    const height = this.opts.y * (this.opts.pixelHeight + this.opts.margin);
  	this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.width = `${width / 2}px`;
    this.canvas.style.height = `${height / 2}px`;
  }

  render(): void {
    if (this.rAF) {
      cancelAnimationFrame(this.rAF);
    }
    this.clear();
    this.draw();
  }
  
  private draw(): void {
  	const { pixelWidth, pixelHeight, margin, x, y, glow, animated } = this.opts;
    const pixels = x * y;

    if (this.data.length !== pixels) {
      throw new Error('`data` needs to be provided fully. Length is insufficient.');
    }

    for (let i = 0; i < pixels; i += 1) {
      const { on, color } = this.data[i];
      const rgba = on ? `rgba(${color.r},${color.g},${color.b},${color.a})` : 'rgba(0,0,0,.1)';
      const dy = Math.floor(i / x);
      let dx = i - (dy * x);

      if (animated) {
        dx -= this.offset;
        dx = (dx < 0) ? (x - 1) - Math.abs(dx) : dx;
      }

      if (glow && on) {
        this.ctx.shadowBlur = 5;
        this.ctx.shadowColor = rgba;
      } else {
        this.ctx.shadowBlur = 0;
      }
      
      this.ctx.fillStyle = rgba;
      this.ctx.fillRect(
        dx * (pixelWidth + margin),
        dy * (pixelHeight + margin),
        pixelWidth,
        pixelHeight
      );
    }

    if (animated) {
      this.animate();
    }
  }

  animate() {
    this.offset += 1;
    if (this.offset >= this.opts.x) {
      this.offset = 0;
    }

    this.rAF = requestAnimationFrame(() => {
      this.clear();
      this.draw();
    });
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setNewOptions(opts: ILedMatrixOptions) {
    this.opts = Object.assign({}, this.opts, opts);
    this.setup();
  }

  setData(data: IMatrix) {
    this.data = data;
  }
}

export default LedMatrix;
