export function hexToBin(num) {
  const bin = num.toString(2);
  return (bin.length < 8) ? '0'.repeat(8 - bin.length) + bin : bin;
}

export function prepareFont(fontMap) {
  return fontMap.map(row => row.map(
    num => hexToBin(num).split('').reverse().join('')
  ));
}
