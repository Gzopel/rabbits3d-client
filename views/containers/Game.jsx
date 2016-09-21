import React from 'react';
import { connect } from 'react-redux';
import keydrown from 'keydrown';
import GameScene from '../components/GameScene';
import Map from '../components/Map';
import Tree from '../components/Tree';
import Character from '../containers/Character';
import Exit from '../components/Exit';
import { characterMoveToPoint } from '../actions/Character';

const ReactTHREE = require('react-three');

const Object3D = ReactTHREE.Object3D;

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.loop = null;
    this.moveTarget = props.characterPosition;
  }

  componentDidMount() {
    this.loop = setInterval(() => {
      keydrown.tick();
      if (!this.moveTarget.equals(this.props.characterPosition)) {
        this.props.dispatch(characterMoveToPoint(this.moveTarget));
      }
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  moveCharacterOnClick = (event, instersection) => {
    this.moveTarget = instersection.point;
  }

  render() {
    if (!this.props.size.width || !this.props.size.height) {
      return false;
    }

    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <Map onClick={this.moveCharacterOnClick} >
          <Object3D>
            <Character
              position={this.props.characterPosition}
              orientation={this.moveTarget}
            />
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
  dispatch: React.PropTypes.func.isRequired,
  characterPosition: React.PropTypes.object.isRequired,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};
const mapStateToProps = (state) => {
  console.log("STATE", state.CharacterCamera.characterPosition);
  return {
    characterPosition: state.CharacterCamera.characterPosition,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps)(GameComponent);

export default Game;
