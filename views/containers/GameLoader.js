import React from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';
import LoadingScreen from '../components/LoadingScreen';
import * as BrowserActions from '../actions/Browser';

class GameLoaderComponent extends React.Component {
  constructor() {
    super();
    this.didLoad = false;
  }

  componentWillMount() {
    this.props.onWillMount();
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.didLoad = true;
      this.forceUpdate();// fake server load
    }, 4000);

    this.props.onDidMount();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillUnmount() {
    this.props.onWillUnmount();
  }

  render() {
    if (!this.didLoad) {
      return <LoadingScreen size={this.props.size} />;
    }
    return <Game size={this.props.size} />;
  }
}

GameLoaderComponent.propTypes = {
  onDidMount: React.PropTypes.func.isRequired,
  onWillMount: React.PropTypes.func.isRequired,
  onWillUnmount:React.PropTypes.func.isRequired,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  })
}

const mapDispatchToProps = (dispatch) => {
  const resize = () => { dispatch(BrowserActions.updateViewportSize()); };
  const onDidMount = () => {
    dispatch(BrowserActions.addEventListener('Game', 'resize', resize));
  };
  const onWillUnmount = () => {
    dispatch(BrowserActions.addEventListener('Game', 'resize', resize));
  };
  return {
    onDidMount: onDidMount,
    onWillMount: resize,
    onWillUnmount: onWillUnmount,
  };
};

const mapStateToProps = (state) => {
  return {
    size: state.Browser.size,
  };
};

const GameLoader = connect(
  mapStateToProps,
  mapDispatchToProps)(GameLoaderComponent);

export default GameLoader;
