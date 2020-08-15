import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//JSX的语法

// let h1 = <h1>helloworld<span> LI</span></h1>
// ReactDOM.render(
//   <React.StrictMode>
//     {h1}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//实现时间的显示
function clock () {
  let now = new Date().toLocaleTimeString()
  let element = (<div>
    <h1>现在的时间是：{now}</h1>
  </div>)
  let root = document.getElementById('root')
  ReactDOM.render(element, root)
}

clock()

setInterval(clock, 1000)