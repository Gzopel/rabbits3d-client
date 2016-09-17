import React from 'react';
import keydrown from 'keydrown';
import GameScene from '../components/GameScene';
import Map from '../components/Map';
import Tree from '../components/Tree';
import Character from '../containers/Character';
import Exit from '../components/Exit';

const ReactTHREE = require('react-three');

const Object3D = ReactTHREE.Object3D;

class GameComponent extends React.Component {
  componentDidMount() {
    keydrown.run(function () {
      keydrown.tick();
    });
  }

  componentWillUnmount() {
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
            <Exit x={780} z={0} />
            <Exit x={-780} z={0} />
            <Exit x={0} z={780} />
            <Exit x={0} z={-780} />
            <Tree x={300} z={300} />
            <Tree x={780} z={200} />
            <Tree x={200} z={780} />
            <Tree x={780} z={780} />
            <Tree x={200} z={200} />
            <Tree x={378} z={200} />
            <Tree x={200} z={378} />
            <Tree x={378} z={378} />
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
