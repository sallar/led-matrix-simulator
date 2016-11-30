import LedMatrix from './led/matrix';
import { font, CHAR_WIDTH, CHAR_HEIGHT } from './led/fonts/5x5';
import { createStore } from './led/store';

let LED_WIDTH = 32;
let LED_HEIGHT = 16;
const canvas = document.querySelector('.matrix') as HTMLCanvasElement;
const ranges = [...document.querySelectorAll('input[type=range]')];

ranges.forEach((range: HTMLInputElement) => {
  range.addEventListener('change', function() {
    const value = parseInt(this.value, 10); 
    if (/x/.test(this.id)) {
      LED_WIDTH = value;
    } else {
      LED_HEIGHT = value;
    }
    render();
  });
});

function render() {
  const led = new LedMatrix(canvas, {
    x: LED_WIDTH,
    y: LED_HEIGHT
  });

  function text(lines: string[], font: string[][], r: number, g: number, b: number, a: number) {
    const store = createStore(LED_WIDTH, LED_HEIGHT);
    
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

  let matrix = text(['$ 500', 'YOLO!'], font, 0, 0, 255, .8);
  led.draw(matrix);
}

render();
