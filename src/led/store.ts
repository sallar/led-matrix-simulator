interface IFill {
  (x: number, y: number, r: number, g: number, b: number, a: number): void;
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
  fill: IFill
}

export function createStore(xw: number, yw: number): IStore {
  const matrix: IMatrix = Array(xw * yw).fill({
    on: false
  });
  
	return {
  	matrix,
  	fill(x = 0, y = 0, r = 0, g = 0, b = 0, a = 1) {
    	matrix[(y * xw) + x] = {
      	on: true,
        color: {
        	r, g, b, a
        }
      };
    }
  };
}
