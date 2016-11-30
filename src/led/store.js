export function createStore(xw, yw) {
	const matrix = [];
  for (let i = 0; i < yw; i += 1) {
  	const row = [];
  	for (let j = 0; j < xw; j += 1) {
    	row.push({
      	on: false
      });
    }
    matrix.push(row);
  }
  
	return {
  	matrix,
  	fill(x, y, r, g, b, a) {
    	matrix[y][x] = {
      	on: true,
        color: {
        	r, g, b, a
        }
      };
    }
  };
}
