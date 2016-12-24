import { h, render } from 'preact';
import Playground from './playground';
import Symbol from './symbols';
import Plasma from './plasma';
import './style.css';

render(
  <div>
    <h1>LED Simulator</h1>
    <h2>Text Writer</h2>
    <Playground/>
    <h2>Symbols</h2>
    <Symbol/>
    <h2>Plasma</h2>
    <Plasma/>
  </div>,
  document.getElementById('root')
);
