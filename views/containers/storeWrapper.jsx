import React from 'react';
import {  Provider }  from 'react-redux';

class StoreWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        { this.props.children }
      </Provider>
    );
  }
}

StoreWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
  store: React.PropTypes.object.isRequired,
};

StoreWrapper.defaultProps = {
  store: window.reduxStore,
};

export default StoreWrapper;
