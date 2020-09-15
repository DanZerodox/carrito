import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Footer} from './componentes/Footer';
import { BrowserRouter, Route, Link } from "react-router-dom";
import {InicioProductos} from './componentes/InicioProductos';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Route path="/" exact={true} component={InicioProductos}></Route>
      <Footer></Footer>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
