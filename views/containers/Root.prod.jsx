import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Game from '../containers/Game';

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Route path="/" component={Game} />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

export default Root;
