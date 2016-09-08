import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Game from './components/Game';
import CameraReducer from './reducers/Camera';

const store = createStore(CameraReducer);

render((
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Game} />
    </Router>
  </Provider>
),
document.getElementById('app'));
