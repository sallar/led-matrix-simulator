import { h, Component, render } from 'preact';
import Simulator from './simulator';
import { createStore, IStore } from './led/store';
import { hexToRGB } from './led/tools';
import { shapes, colors } from './shape';
import * as api from './plasma-core/api';

interface State {
  data?: any;
}

class Plasma extends Component<any, State> {
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

    setInterval(() => {
      api.loop();
      this.setState({
        data: store.matrix
      });
    }, 100);
  }

  render(_: any, { data }: State) {
    return (
      <div className="row">
        <div className="column">
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
