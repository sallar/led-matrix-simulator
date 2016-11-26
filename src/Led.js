import React, { PropTypes } from 'react';

function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const Pixel = ({ on, color = {r: 0, g: 0, b: 0, a: 1} }) => (
  <div
    style={{
      width: '5px',
      height: '5px',
      opacity: color.a,
      backgroundColor: on ? rgbToHex(color.r, color.g, color.b) : '#ededed',
      margin: '1px',
      flex: '0 0 5px'
    }}/>
);

Pixel.propTypes = {
  status: PropTypes.bool,
  color: PropTypes.object
};

const Row = ({ size, data }) => (
  <div style={{display: 'flex'}}>
    {Array(size).fill().map((_, i) => <Pixel key={i} {...data[i]}/>)}
  </div>
);

Row.propTypes = {
  size: PropTypes.number,
  data: PropTypes.array
};

const Led = ({ width, height, data }) => (
  <div>
    {Array(height).fill().map((_, i) => <Row key={i} size={width} data={data[i]}/>)}
  </div>
);

Led.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array
};

export default Led;
