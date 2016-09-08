import React from 'react'
var ReactTHREE = require('react-three')
const THREE =require('three')
const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const Character = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        let material = new THREE.MeshBasicMaterial({
            color:0xff0000
        })
        let geometry = new THREE.SphereGeometry(5,32,32)
        let quaternion = new THREE.Quaternion(0,0,0,0);
        let position = new THREE.Vector3(0,0,0);
        return (<Object3D quaternion={quaternion} position={position}>
            <Mesh position={position} geometry={geometry} material={material} />
        </Object3D>)

    }
})

export default Character