import { connect } from 'react-redux';
import React from 'react';
import GameScene from '../components/GameScene';
import Map from '../components/Map';
import Character from '../containers/Character';
import * as BrowserActions from '../actions/Browser';
import {start,stop} from '../animationFrame';
import Exit from '../components/Exit'

const ReactTHREE = require('react-three');
const Object3D = ReactTHREE.Object3D;

import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Root from '../containers/Root';
const store = configureStore();


class GameComponent extends React.Component {
  componentWillMount() {
    this.resizeGameScene();
  }

  componentDidMount() {
    this.props.dispatch(
      BrowserActions.addEventListener('Game', 'resize', this.resizeGameScene)
    );
    setTimeout(()=>{
      start(<Provider store={store}>
            <Game />
          </Provider>);
    },1000)
  }

  componentWillUnmount(){
    stop(<Root store={store} history={browserHistory}/>);
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
        <Object3D>
          <Character />
          <Exit x={395} z={400}/>
          <Exit x={400} z={395}/>
          <Exit x={-395} z={-400}/>
          <Exit x={-400} z={-395}/>
          </Object3D>
        </Map>
      </GameScene>
    );
  }
}

GameComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

const mapStateToProps = (state) => {
  return {
    size: state.Browser.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default Game;
