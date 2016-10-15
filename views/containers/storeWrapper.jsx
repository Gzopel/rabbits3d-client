import React from 'react';
import { Provider }  from 'react-redux';

export default (Component) => {
  return class StoreWrapper extends React.Component {
    render() {
      return (
        <Provider store={window.reduxStore}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };
};
