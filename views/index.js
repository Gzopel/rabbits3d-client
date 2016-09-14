if (module.hot) { module.hot.accept(); }

import React from 'react';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
const ReactTHREE = require('react-three');

const store = configureStore();
const renderelement = document.getElementById('app');

ReactTHREE.render((
    <Root store={store} history={browserHistory}/>
),renderelement);
