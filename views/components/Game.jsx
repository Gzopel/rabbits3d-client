import React from 'react';
import GameScene from './GameScene';
import Map from './Map';
import Character from './Character';
import * as BrowserActions from '../actions/Browser';

class Game extends React.Component {
  componentWillMount() {
    this.resizeGameScene();
  }

  componentDidMount() {
    this.props.dispatch(
      BrowserActions.addEventListener('Game', 'resize', this.resizeGameScene)
    );
  }

  resizeGameScene = () => {
    this.props.dispatch(
      BrowserActions.updateViewportSize()
    );
  };

  render() {
    if (!this.props.size.width || !this.props.size.height) {
      return false;
    }

    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <Map>
          <Character />
        </Map>
      </GameScene>
    );
  }
}

Game.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

export default Game;
