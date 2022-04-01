import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 设置常规的样式
// import "normalize.css"
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
