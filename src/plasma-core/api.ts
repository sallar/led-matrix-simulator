const api = require('exports-loader?Module!./core');
let pointer: any;

export function setup(fn: any) {
  pointer = api.Runtime.addFunction(fn);
}

export function loop() {
  api.ccall('loop', 'void', [], [pointer]);
}
