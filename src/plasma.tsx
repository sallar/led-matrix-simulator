import { h, Component, render } from 'preact';
import Simulator from './simulator';
import { createStore } from './led/store';
import { hexToRGB } from './led/tools';
import { shapes, colors } from './shape';

interface State {
  data?: any;
}

const sinetab = new Int8Array([
     0,   2,   5,   8,  11,  15,  18,  21,
    24,  27,  30,  33,  36,  39,  42,  45,
    48,  51,  54,  56,  59,  62,  65,  67,
    70,  72,  75,  77,  80,  82,  85,  87,
    89,  91,  93,  96,  98, 100, 101, 103,
   105, 107, 108, 110, 111, 113, 114, 116,
   117, 118, 119, 120, 121, 122, 123, 123,
   124, 125, 125, 126, 126, 126, 126, 126,
   127, 126, 126, 126, 126, 126, 125, 125,
   124, 123, 123, 122, 121, 120, 119, 118,
   117, 116, 114, 113, 111, 110, 108, 107,
   105, 103, 101, 100,  98,  96,  93,  91,
    89,  87,  85,  82,  80,  77,  75,  72,
    70,  67,  65,  62,  59,  56,  54,  51,
    48,  45,  42,  39,  36,  33,  30,  27,
    24,  21,  18,  15,  11,   8,   5,   2,
     0,  -3,  -6,  -9, -12, -16, -19, -22,
   -25, -28, -31, -34, -37, -40, -43, -46,
   -49, -52, -55, -57, -60, -63, -66, -68,
   -71, -73, -76, -78, -81, -83, -86, -88,
   -90, -92, -94, -97, -99,-101,-102,-104,
  -106,-108,-109,-111,-112,-114,-115,-117,
  -118,-119,-120,-121,-122,-123,-124,-124,
  -125,-126,-126,-127,-127,-127,-127,-127,
  -128,-127,-127,-127,-127,-127,-126,-126,
  -125,-124,-124,-123,-122,-121,-120,-119,
  -118,-117,-115,-114,-112,-111,-109,-108,
  -106,-104,-102,-101, -99, -97, -94, -92,
   -90, -88, -86, -83, -81, -78, -76, -73,
   -71, -68, -66, -63, -60, -57, -55, -52,
   -49, -46, -43, -40, -37, -34, -31, -28,
   -25, -22, -19, -16, -12,  -9,  -6,  -3
]);

function HSVtoRGB(h: number, s: number, v:number) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

const radius1  = 65.2, radius2  = 92.0, radius3  = 163.2, radius4  = 176.8,
      centerx1 = 64.4, centerx2 = 46.4, centerx3 =  93.6, centerx4 =  16.4, 
      centery1 = 34.8, centery2 = 26.0, centery3 =  56.0, centery4 = -11.6;
let   angle1   =  0.0, angle2   =  0.0, angle3   =   0.0, angle4   =   0.0;
let   hueShift =  0;

function loop() {
  let x1 = 0, x2 = 0, x3 = 0, x4 = 0, y1 = 0, y2 = 0, y3 = 0, y4 = 0, sx1 = 0, sx2 = 0, sx3 = 0, sx4 = 0;
  let x = 0, y = 0;
  let value = 0;
  const store = createStore(32, 16);

  sx1 = Math.trunc(Math.cos(angle1) * radius1 + centerx1);
  sx2 = Math.trunc(Math.cos(angle2) * radius2 + centerx2);
  sx3 = Math.trunc(Math.cos(angle3) * radius3 + centerx3);
  sx4 = Math.trunc(Math.cos(angle4) * radius4 + centerx4);
  y1  = Math.trunc(Math.sin(angle1) * radius1 + centery1);
  y2  = Math.trunc(Math.sin(angle2) * radius2 + centery2);
  y3  = Math.trunc(Math.sin(angle3) * radius3 + centery3);
  y4  = Math.trunc(Math.sin(angle4) * radius4 + centery4);


  for (y = 0; y < 16; y++) {
    x1 = sx1; x2 = sx2; x3 = sx3; x4 = sx4;
    for (x = 0; x < 32; x++) {
      value = hueShift
        + (sinetab[(x1 * x1 + y1 * y1) >>> 6] || 0)
        + (sinetab[(x2 * x2 + y2 * y2) >>> 6] || 0)
        + (sinetab[(x3 * x3 + y3 * y3) >>> 7] || 0)
        + (sinetab[(x4 * x4 + y4 * y4) >>> 7] || 0);
        //console.log(Math.abs(value));
      //const { r, g, b } = HSVtoRGB(Math.abs(value) * 3, 255, 255);
      //console.log(r, g, b);
      store.fill(x, y, Math.abs(value * 3), 255, 255, 1);
      x1--; x2--; x3--; x4--;
    }
    y1--; y2--; y3--; y4--;
  }

  angle1 += 0.03;
  angle2 -= 0.07;
  angle3 += 0.13;
  angle4 -= 0.15;
  hueShift += 2;

  return store.matrix;
}

class Plasma extends Component<any, State> {

  constructor() {
    super();
    this.state = {
      data: loop()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: loop()
      });
    }, 100);
  }

  render(_: any, { }: State) {
    return (
      <div className="row">
        <div className="column">
          <div class="led">
            <Simulator
              data={this.state.data}
              x={32}
              y={16}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default Plasma;
