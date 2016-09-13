import React from 'react'
var ReactTHREE = require('react-three')
const THREE =require('three')
const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const Exit = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        var geometry = new THREE.CircleGeometry( 5, 32 );
        var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        var quaternion = new THREE.Quaternion(0,0,0,0)
        let position = new THREE.Vector3(this.props.x,1,this.props.z);
        console.log("rendering exit at ",this.props);
        return (<Object3D quaternion={quaternion} position={position}>
            <Mesh position={position} geometry={geometry} material={material} />
        </Object3D>)

    }
})

export default Exit