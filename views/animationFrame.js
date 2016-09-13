import React from 'react';
import configureStore from './store/configureStore';
const ReactTHREE = require('react-three');
import { Provider } from 'react-redux';
import Game from './containers/Game';

const store = configureStore();
const renderelement = document.getElementById('app');

let prevT = 0;
let _stop = false;
export const stop = () => {_stop=true};
export const step = (t) => {
    if(_stop) return;

    let start = new Date().getTime();
    console.log("TIME DIFF",prevT-t);
    prevT = t;
    ReactTHREE.render(
        <Provider store={store}>
            <Game />
        </Provider>, renderelement);

    let end = new Date().getTime();
    let diff = end-start;
    let wait = 16-diff;
    if (wait > 0) {
        setTimeout(()=>{
            requestAnimationFrame(step);
        },wait);//60 fps;
    } else requestAnimationFrame(step);
};

