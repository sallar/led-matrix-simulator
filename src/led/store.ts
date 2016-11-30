interface Pixel {
  on: boolean;
  color: Object;
}

interface IStore {
  matrix: Pixel[][],
  fill: Function
}

export function createStore(xw: number, yw: number): IStore {
	const matrix: Array<any> = [];
  for (let i = 0; i < yw; i += 1) {
  	const row: Array<any> = [];
  	for (let j = 0; j < xw; j += 1) {
    	row.push({
      	on: false
      });
    }
    matrix.push(row);
  }
  
	return {
  	matrix,
  	fill(x: number, y: number, r: number = 0, g: number = 0, b: number = 0, a: number = 1) {
    	matrix[y][x] = {
      	on: true,
        color: {
        	r, g, b, a
        }
      };
    }
  };
}
