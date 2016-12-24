import { h, Component, render } from 'preact';
import Simulator from './simulator';
import { createStore, IStore, hexToRGB } from 'led-matrix';
import { shapes, colors } from './shape';
import * as api from './plasma-core/api';

interface State {
  data?: any;
}

class Plasma extends Component<any, State> {
  private timer: number;

  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const store = createStore(32, 16);

    api.setup((x: number, y: number, r:number, g:number, b:number) => {
      store.fill(x, y, r << 4, g << 4, b << 4, 1);
    });

    this.timer = window.setInterval(() => {
      api.loop();
      this.setState({
        data: store.matrix
      });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  render(_: any, { data }: State) {
    return (
      <div className="row">
        <div className="column">
          <p>Plasma demo is a port of <a href="https://github.com/adafruit/RGB-matrix-Panel">Adafruit RGB Matrix Panel Plasma Example</a> in Javascript. The original C++ code has been ported using <a href="https://github.com/kripken/emscripten">Emscripten</a> to Javascript and adapted for this simulator.</p>
          <div class="led">
            {data && <Simulator
              data={data}
              x={32}
              y={16}
              />}
          </div>
        </div>
      </div>
    )
  }
}

export default Plasma;
