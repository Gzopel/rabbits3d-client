import React from 'react'
var ReactTHREE = require('react-three')
var THREE =require('three')
import Camera from './Camera'
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
                <Camera aspect={this.props.width / this.props.height}></Camera>
                {this.props.children}
            </Scene>
        </Renderer>;
    },
})

export default GameScene