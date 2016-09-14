import React from 'react';
import configureStore from './store/configureStore';
const ReactTHREE = require('react-three');
import { Provider } from 'react-redux';
import Game from './containers/Game';
import keydrown from 'keydrown';

const store = configureStore();
const renderelement = document.getElementById('app');

let _stop = false;
let _element;

const step = (timestamp) => {
    let start = new Date().getTime();

    ReactTHREE.render(_element, renderelement);

    if(_stop) {
      keydrown.stop();
      return;
    }
    keydrown.tick();

    let end = new Date().getTime();
    let diff = end-start;
    let wait = 16-diff;
    if (wait > 0) {
        setTimeout(()=>{
            requestAnimationFrame(step);
        },wait);//60 fps;
    } else requestAnimationFrame(step);
};

export const start = (element) => {
  _element=element;
  _stop=false;
  step();
};

export const stop = (element) => {
  _element=element
  _stop=true
};
