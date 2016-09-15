import React from 'react';
import GameScene from '../components/GameScene';
import Map from '../components/Map';
import Character from '../containers/Character';
import Exit from '../components/Exit'
import keydrown from 'keydrown';
const ReactTHREE = require('react-three');
const Object3D = ReactTHREE.Object3D;


class GameComponent extends React.Component {
  componentDidMount() {
    keydrown.run(function () {
      keydrown.tick();
    });
  }

  componentWillUnmount(){
    keydrown.stop();
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
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

export default GameComponent;
