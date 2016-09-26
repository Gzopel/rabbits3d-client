import React from 'react';
import React3 from 'react-three-renderer';
import { connect } from 'react-redux';
import keydrown from 'keydrown';
import MainLoop from 'mainloop.js';

import GameScene from '../components/GameScene';
import Map from '../components/Map';
import Tree from '../components/Tree';
import Character from '../containers/Character';
import Exit from '../components/Exit';
import { characterMoveToPoint } from '../actions/Character';

const FPS = 60;
const TIME_STEP = 1000 / FPS;
const MAX_FPS = 60;

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxFPS: MAX_FPS,
      timeStep: TIME_STEP,
      clickedPosition: null,
      loop: null,
    };
  }

  onBeginGame = () => {
    // TODO: Implement
  };

  onUpdateGame = (delta) => {
    // TODO: Take delta into account
    keydrown.tick();
    this.props.dispatch(characterMoveToPoint(this.state.clickedPosition));
  };

  onDraw = () => {
    this.forceUpdate();
  };

  onEndGame = (_, panic) => {
    if (panic) {
      this.state.loop.resetFrameDelta();
    }
  };

  componentDidMount = () => {
    // TODO create a component that handles the loop, game should dispatch an action for it to start/stop looping
    //const loop = MainLoop
    //  .setMaxAllowedFPS(this.state.maxFPS)
    //  .setSimulationTimestep(this.state.timeStep)
    //  .setBegin(this.onBeginGame)
    //  .setUpdate(this.onUpdateGame)
    //  .setDraw(this.onDraw)
    //  .setEnd(this.onEndGame);
    //
    //this.setState({
    //  loop,
    //});
    //
    //if (this.props.run) {
    //  loop.start();
    //}
  };

  componentWillUnmount = () => {
    //this.state.loop.stop();
  };

  shouldGameRun = (nextProps) => {
    if (nextProps.run) {
      this.state.loop.start();
    } else {
      this.state.loop.stop();
    }
  };

  moveCharacterOnClick = (event, intersection) => {
    if (event.preventDefault) {
      event.preventDefault();
    }

    this.setState({
      clickedPosition: intersection.point,
    });
  };

  shouldComponentUpdate = () => {
    // Overrides React Automatic Renders on State Change
    return true;
  };

  componentWillReceiveProps(nextProps) {
    //this.shouldGameRun(nextProps);
  }

  render() {
    if (!this.props.size.width || !this.props.size.height) {
      return false;
    }

    // TODO: create a factory of children elements based on a map config
    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <Map onClick={this.moveCharacterOnClick}>
          <object3D>
            <Character
              position={this.props.characterPosition}
              rotation={this.props.characterRotation}
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
          </object3D>
        </Map>
      </GameScene>
    );
  }
}

GameComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  characterPosition: React.PropTypes.object.isRequired,
  characterRotation: React.PropTypes.object,
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
  run: React.PropTypes.bool,
};

GameComponent.defaultProps = {
  run: true,
};

const mapStateToProps = state => ({
  characterPosition: state.Character.characterPosition,
  characterRotation: state.Character.characterRotation,
});

const Game = connect(
  mapStateToProps
)(GameComponent);

export default Game;
