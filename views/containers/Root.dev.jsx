import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Game from '../containers/Game';
import DevTools from '../containers/DevTools';

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history} >
          <Route path="/" component={Game} />
        </Router>
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

export default Root;
