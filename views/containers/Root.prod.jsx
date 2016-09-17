import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import GameLoader from '../containers/GameLoader';

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Route path="/" component={GameLoader} />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
};

export default Root;
