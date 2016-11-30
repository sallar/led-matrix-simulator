import * as Vue from 'vue';
import LedMatrix from './led/matrix';
import { createStore } from './led/store';
import { font, CHAR_WIDTH, CHAR_HEIGHT } from './led/fonts/5x5';
import './style.css';

let LED_WIDTH = 32;
let LED_HEIGHT = 16;
const canvas = document.querySelector('.matrix') as HTMLCanvasElement;
const ranges = [...document.querySelectorAll('input[type=range]')];
const defaults = {
  x: 32,
  y: 16,
  line1: '$ 500',
  line2: 'Cash#'
};

const app = new Vue({
  el: '#app',
  data: {
    x: defaults.x,
    y: defaults.y,
    line1: defaults.line1,
    line2: defaults.line2
  },
  methods: {
    change() {
      let _this: any = this;
      render(
        parseInt(_this.x, 10),
        parseInt(_this.y, 10),
        [_this.line1, _this.line2]
      );
    }
  }
});

function render(x: number, y: number, lines: string[]) {
  const led = new LedMatrix(canvas, {
    x,
    y
  });

  function text(lines: string[], font: string[][], r: number, g: number, b: number, a: number) {
    const store = createStore(x, y);
    
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
                r, g, b, a
              );
            }
          }
        }
      }
    });
    
    return store.matrix;
  }

  let matrix = text(lines, font, 0, 255, 0, .8);
  led.draw(matrix);
}

render(defaults.x, defaults.y, [defaults.line1, defaults.line2])
