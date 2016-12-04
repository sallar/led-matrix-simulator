import { h, Component, render } from 'preact';
import LedMatrix, { ILedMatrixOptions } from './led/matrix';
import { IMatrix } from './led/store';

interface State {
  data?: IMatrix;
  options?: ILedMatrixOptions;
}

interface Props extends ILedMatrixOptions, preact.ComponentProps {
  data: IMatrix;
}

class Simulator extends Component<Props, State> {
  canvas: HTMLCanvasElement;
  led: LedMatrix;

  constructor(props: Props) {
    super(props);
    const { data, children, ...options } = props;
    this.state = {
      data,
      options
    };
  }

  componentDidMount() {
    this.led = new LedMatrix(this.canvas, this.state.options);
    this.led.setData(this.state.data);
    this.draw();
  }

  componentWillReceiveProps(nextProps: Props) {
    const { data, children, ...options } = nextProps;

    if (options !== this.state.options) {
      this.led.setNewOptions(options);
      this.setState({options});
    }

    if (data !== this.state.data) {
      this.led.setData(data);
      this.setState({data});
    }

    this.draw();
  }

  draw() {
    this.led.render();
  }

  render() {
    return (
      <canvas ref={canvas => this.canvas = canvas as HTMLCanvasElement}></canvas>
    );
  }
}

export default Simulator;
