import { h, Component, render } from 'preact';
import LedMatrix from './led/matrix';
import { createStore } from './led/store';
import { font, CHAR_WIDTH, CHAR_HEIGHT } from './led/fonts/5x5';

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      cols: 64,
      rows: 32,
      text: 'Hello\nThere'
    };
  }

  componentDidMount() {
    this.led = new LedMatrix(this.canvas, {
      x: this.state.cols,
      y: this.state.rows
    });
    this.draw();
  }

  draw() {
    const store = createStore(this.state.cols, this.state.rows);
    const lines = this.state.text.split('\n');

    lines.forEach((ch, line) => {
      // For each character
      for (let i = 0; i < ch.length; i += 1) {
        const ind = ch.charCodeAt(i) - 32;
        const fontRow = font[ind];
        // For each column
        for (let x = 0; x < CHAR_WIDTH; x += 1) {
          const col = fontRow[x];
          // For each pixel
          for (let y = 0; y < CHAR_HEIGHT; y += 1) {
            if (col[y] === '1') {
              store.fill(
                x + (i * CHAR_WIDTH),
                y + (line * CHAR_HEIGHT),
                255, 0, 0, 1
              );
            }
          }
        }
      }
    });

    this.led.clear();
    this.led.draw(store.matrix);
  }

  slideChange(e, prop) {
    this.setState({
      [prop]: parseInt(e.target.value)
    });
    this.led.setNewDimensions(this.state.cols, this.state.rows);
    this.draw();
  }

  textChange(e) {
    this.setState({
      text: e.target.value
    });
    this.draw();
  }

  render(_, { rows, cols, text }) {
    return (
      <div>
        x: {cols} <input type="range" min="32" max="64" onInput={e => this.slideChange(e, 'cols')} value={cols}/><br/>
        y: {rows} <input type="range" min="16" max="32" onInput={e => this.slideChange(e, 'rows')} value={rows}/><br/>
        <textarea value={text} onKeyUp={e => this.textChange(e)}/><br/>
        <div class="led">
          <canvas ref={canvas => this.canvas = canvas}></canvas>
        </div>
      </div>
    )
  }
}

export default Playground;
