import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';

if (module.hot) {
  module.hot.accept();
}

window.reduxStore = configureStore();

render((
  <Root store={window.reduxStore} history={browserHistory} />
  ),
  document.getElementById('app'));
