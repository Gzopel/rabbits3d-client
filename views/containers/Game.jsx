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
      this.props.onWillMount();
  }

  componentDidMount() {
    this.props.onDidMount();
  }

  componentWillUnmount(){
    this.props.onWillUnmount();
  }

  render() {
    if (!this.props.size.width || !this.props.size.height) {
      return false;
    }

    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <Map>
        <Object3D>
          <Character />
          <Exit x={780} z={0}/>
          <Exit x={-780} z={0}/>
          <Exit x={0} z={780}/>
          <Exit x={0} z={-780}/>
          </Object3D>
        </Map>
      </GameScene>
    );
  }
}

GameComponent.propTypes = {
  onDidMount: React.PropTypes.func.isRequired,
  onWillMount: React.PropTypes.func.isRequired,
  onWillUnmount:React.PropTypes.func.isRequired,
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
  const resize = ()=>{dispatch(BrowserActions.updateViewportSize())}
  const onDidMount = ()=>{
    dispatch(BrowserActions.addEventListener('Game', 'resize', resize));
    start(<Provider store={store}><Game /></Provider>);
  }
  const onWillUnmount = ()=>{
    dispatch(BrowserActions.addEventListener('Game', 'resize', resize));
    stop(<Root store={store} history={browserHistory}/>);
  }
  return {
    onDidMount: onDidMount,
    onWillMount: resize,
    onWillUnmount:onWillUnmount
  };
};


const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default Game;
