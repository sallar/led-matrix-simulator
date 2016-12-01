import { IMatrix } from './store';

interface ILedMatrixOptions {
  x?: number;
  y?: number;
  pixelWidth?: number;
  pixelHeight?: number;
  margin?: number;
}

const DEFAULT_OPTS: ILedMatrixOptions = {
  x: 32,
  y: 16,
  pixelWidth: 10,
  pixelHeight: 10,
  margin: 4
};

class LedMatrix {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opts: ILedMatrixOptions;

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
  
  draw(data: IMatrix): void {
  	const { pixelWidth, pixelHeight, margin, x, y } = this.opts;
    const pixels = this.opts.x * this.opts.y;

    for (let i = 0; i < pixels; i += 1) {
      const { on, color } = data[i];
      const y = Math.floor(i / this.opts.x);
      const x = i - (y * this.opts.x);
      
      this.ctx.fillStyle = on ? `rgba(${color.r},${color.g},${color.b},${color.a})` : 'rgba(0,0,0,.1)';
      this.ctx.fillRect(
        x * (pixelWidth + margin),
        y * (pixelHeight + margin),
        pixelWidth,
        pixelHeight
      );
    }
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setNewDimensions(x: number, y: number): void {
    this.opts = Object.assign({}, this.opts, { x, y });
    this.setup();
  }
}

export default LedMatrix;
