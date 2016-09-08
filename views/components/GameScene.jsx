import React, { PropTypes } from 'react'
var ReactTHREE = require('react-three')
import Camera from '../containers/Camera'
var Renderer = ReactTHREE.Renderer;
var Scene = ReactTHREE.Scene;

const GameScene = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        console.log("rendering game scene",this.props);
        return <Renderer width={this.props.width} height={this.props.height}>
            <Scene width={this.props.width} height={this.props.height} camera="maincamera">
                <Camera />
                {this.props.children}
            </Scene>
        </Renderer>;
    },
})

/*
const GameScene =(width,height,children)=>{
    console.log("children",children);
        return <Renderer width={width} height={height}>
            <Scene width={width} height={height} camera="maincamera">
                <div>
                    <Camera/>
                    {children}
                </div>
            </Scene>
        </Renderer>;
}

GameScene.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
}
*/
export default GameScene