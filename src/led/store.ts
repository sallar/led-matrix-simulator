import { hexToRGB } from './tools';

interface IFill {
  (x: number, y: number, r: number, g: number, b: number, a: number): void;
}

interface IWrite {
  (text: string, font: string[][], color: string): void;
}

interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface IPixel {
  on: boolean;
  color?: IColor;
}

export interface IMatrix {
  [index: number]: IPixel;
}

export interface IStore {
  matrix: IMatrix,
  fill: IFill,
  write: IWrite
}

export function createStore(xw: number, yw: number): IStore {
  const matrix: IMatrix = Array(xw * yw).fill({
    on: false
  });

  const fill: IFill = (x = 0, y = 0, r = 0, g = 0, b = 0, a = 1) => {
    matrix[(y * xw) + x] = {
      on: true,
      color: { r, g, b, a }
    };
  };

  const write: IWrite = (text, font, color) => {
    const lines = text.split('\n');
    const [ r, g, b ] = hexToRGB(color);
    const CHAR_WIDTH = font[0].length;
    const CHAR_HEIGHT = font[0][0].length;

    lines.forEach((ch: string, line: number) => {
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
              fill(
                x + (i * CHAR_WIDTH),
                y + (line * CHAR_HEIGHT),
                r, g, b, 1
              );
            }
          }
        }
      }
    });
  };
  
  return {
    matrix,
    fill,
    write
  };
}
