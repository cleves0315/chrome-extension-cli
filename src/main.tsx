import React from 'react'
import { render } from 'react-dom';
import { xiaoming } from './js';
import './css/index.scss';

const a = 'a'

console.log(a)
console.log(xiaoming);


const Index = () => {
  return (
    <div>123</div>
  )
}

render(<Index />, document.querySelector('.app'));
  
