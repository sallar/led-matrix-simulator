import { h, render } from 'preact';
import Playground from './playground';
import Symbol from './symbols';
import './style.css';

render(
  <div>
    <h2>Text Writer</h2>
    <Playground/>
    <h2>Symbols</h2>
    <Symbol/>
  </div>,
  document.getElementById('root')
);
