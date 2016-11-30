import LedMatrix from './led/matrix';
import { font, CHAR_WIDTH, CHAR_HEIGHT } from './led/fonts/5x5';
import { createStore } from './led/store';

const canvas = document.querySelector('.matrix') as HTMLCanvasElement;
const led = new LedMatrix(canvas);

function text(lines: string[], font: string[][], r: number, g: number, b: number, a: number) {
  const store = createStore(32, 16);
  
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

let matrix = text(['$ 500', 'CASH#'], font, 0, 0, 255, .8);
led.draw(matrix);
