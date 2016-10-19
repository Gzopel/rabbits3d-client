import React from 'react';
import { connect } from 'react-redux';
import Game from '../containers/Game';
import LoadingScreen from '../components/LoadingScreen';
import * as BrowserActions from '../actions/Browser';

class GameLoaderComponent extends React.Component {
  constructor() {
    super();
    this.didLoad = false;
  }

  componentWillMount() {
    this.resizeGameScene();
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.didLoad = true;
      this.forceUpdate();// fake server load
      clearTimeout(this.timeout);
    }, 2000);
    this.props.dispatch(BrowserActions.addEventListener('Game', 'resize', this.resizeGameScene));
  }

  componentWillUnmount() {
    this.props.dispatch(BrowserActions.removeEventListener('Game', 'resize', this.resizeGameScene));
    clearTimeout(this.timeout);
  }

  resizeGameScene = () => {
    this.props.dispatch(BrowserActions.updateViewportSize());
  }

  render() {
    if (!this.didLoad) {
      return <LoadingScreen size={this.props.size} />;
    }
    return <Game size={this.props.size} />;
  }
}

GameLoaderComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

const mapStateToProps = state => ({
  size: state.Browser.size,
});

const GameLoader = connect(
  mapStateToProps,
  mapDispatchToProps)(GameLoaderComponent);

export default GameLoader;
