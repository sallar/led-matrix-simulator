import { h, Component, render } from 'preact';
import LedMatrix from './led/matrix';
import { createStore } from './led/store';
import { hexToRGB } from './led/tools';
import { shapes, colors } from './shape';

interface State {
  shape?: string;
}

class Symbols extends Component<any, State> {
  canvas: HTMLCanvasElement;
  led: LedMatrix;
  
  constructor() {
    super();
    this.state = {
      shape: 'cross'
    };
  }

  componentDidMount() {
    this.led = new LedMatrix(this.canvas, {
      x: 11,
      y: 11
    });
    this.draw();
  }

  draw() {
    const c = hexToRGB(colors[Math.floor(Math.random() * (colors.length - 1))]);
    const shape = shapes[this.state.shape];
    const len = shape.length;
    const width = Math.sqrt(len);
    const store = createStore(width, width);

    for (let i = 0; i < len; i += 1) {
      const y = Math.floor(i / width);
      const x = i - (y * width);
        if (shapes[this.state.shape][i] === 1) {      
          store.fill(x, y, c[0], c[1], c[2], c[3]);
        }
    }
    this.led.setData(store.matrix);
    this.led.clear();
    this.led.render();
  }

  handleShapeChange(shape: string) {
    this.setState({
      shape
    });
    this.draw();
  }

  render(_: any, { shape }: State) {
    return (
      <div className="row">
        <div className="column">
          {Object.keys(shapes).map(shapeName =>
            <label>
              <input
                type="radio"
                value={shapeName}
                checked={shapeName === shape}
                onChange={e => this.handleShapeChange(shapeName)}
                /> {shapeName}
            </label> 
          )}
        </div>
        <div className="column column-60">
          <div class="led">
            <canvas ref={canvas => this.canvas = canvas as HTMLCanvasElement}></canvas>
          </div>
        </div>
      </div>
    )
  }
}

export default Symbols;
