import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Game from './components/Game';
import RootReducer from './reducers';
import DevTools from './containers/DevTools';

const store = createStore(
  RootReducer,
  compose(
    DevTools.instrument()
  )
);

render((
  <Provider store={store}>
    <div>
      <Router history={browserHistory} >
        <Route path="/" component={Game} />
      </Router>
      <DevTools />
    </div>
  </Provider>
),
document.getElementById('app'));
