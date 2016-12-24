import { h, Component, render } from 'preact';
import Simulator from './simulator';
import { createStore } from 'led-matrix';
import * as fonts from './fonts';

interface State {
  cols?: number;
  rows?: number;
  text?: string;
  color?: string;
  fonts?: string[];
  font?: string;
  animated?: boolean;
  data?: any;
  [index: string]: any;
}

class Playground extends Component<any, State> {
  
  constructor() {
    super();
    this.state = {
      cols: 32,
      rows: 16,
      text: 'Hello\nThere',
      color: '#5fd3ff',
      fonts: Object.keys(fonts),
      font: 'fivebyfive',
      animated: false,
      glow: false
    };
  }

  componentWillMount() {
    this.draw();
  }

  draw() {
    // keep ascii codes 0 - 127 
    const text = this.state.text.replace(/[^\x00-\x7F]/g, '');
    const store = createStore(this.state.cols, this.state.rows);
    store.write(text, (fonts as any)[this.state.font], this.state.color);
    this.setState({data: store.matrix});
  }

  slideChange(e: any, prop: string) {
    this.setState({
      [prop]: parseInt(e.target.value)
    });
    this.draw();
  }

  propChange(e: any, prop: string) {
    this.setState({
      [prop]: e.target.value
    });
    this.draw();
  }

  propToggle(e: any, prop:string) {
    this.setState({
      [prop]: !this.state[prop]
    });
    this.draw();
  }

  render(_: any, { rows, cols, text, color, fonts, font, animated, data, glow }: State) {
    return (
      <div className="row">
        <div className="column">
          x: {cols}
          <input type="range" min="32" max="64" onInput={e => this.slideChange(e, 'cols')} value={cols.toString()}/><br/>
          y: {rows}
          <input type="range" min="16" max="32" onInput={e => this.slideChange(e, 'rows')} value={rows.toString()}/><br/>
          <input type="checkbox" checked={animated} onChange={e => this.propToggle(e, 'animated')}/> Animated
          <input type="checkbox" checked={glow} onChange={e => this.propToggle(e, 'glow')}/> Glow
          <textarea value={text} onKeyUp={e => this.propChange(e, 'text')}/><br/>
          <input type="color" value={color} onChange={e => this.propChange(e, 'color')}/><br/>
          {fonts.map(fontName =>
            <label>
              <input
                type="radio"
                value={fontName}
                checked={fontName === font}
                onChange={e => this.propChange(e, 'font')}
                /> {fontName}
            </label> 
          )}
        </div>
        <div className="column column-60">
          <div class="led">
            <Simulator
              data={data}
              x={cols}
              y={rows}
              animated={animated}
              glow={glow}
              />
          </div>
        </div>
      </div>
    );
  }

}

export default Playground;
