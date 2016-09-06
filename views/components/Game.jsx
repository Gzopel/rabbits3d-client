import React from 'react'
var ReactTHREE = require('react-three')
var THREE =require('three')
import GameScene from './GameScene'
import Map from './Map'
import Character from './Character.jsx'

var Object3D = ReactTHREE.Object3D;
var Mesh = ReactTHREE.Mesh;

const Game = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        return <GameScene width={window.innerWidth} height={window.innerHeight}>
            <Map></Map>
            <Character></Character>
        </GameScene>;
    }
})

export default Game

/*
 <Mesh position={new THREE.Vector3(0,0,0)}  geometry={new THREE.BoxGeometry(100, 100, 100 )} material={new THREE.MeshBasicMaterial({color:0x000fff})} />
 * */