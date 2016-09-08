import React from 'react'
var ReactTHREE = require('react-three')
const THREE =require('three')
const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const Map = React.createClass({
    getInitialState() {
        return {};
    },
    render() {
        let material = new THREE.MeshBasicMaterial({
            color:0x00ff00,
            side: THREE.DoubleSide
        })
        let geometry = new THREE.PlaneGeometry(800,800,1,1)
        var vFrom = new THREE.Vector3( 800, 800, 0 ).normalize();
        var vTo = new THREE.Vector3( 800, 0, 800 ).normalize();
        var quaternion = new THREE.Quaternion().setFromUnitVectors( vFrom, vTo );
        geometry.applyMatrix( new THREE.Matrix4().makeRotationFromQuaternion( quaternion ) );


        var vFrom2 = new THREE.Vector3( 0, 800, 0 ).normalize();
        var vTo2 = new THREE.Vector3( 0, 0, 800 ).normalize();
        var quaternion2 = new THREE.Quaternion().setFromUnitVectors( vFrom2, vTo2 );
        geometry.applyMatrix( new THREE.Matrix4().makeRotationFromQuaternion( quaternion2 ) );

        var quaternion0 = new THREE.Quaternion(0,0,0,0)
        let position = new THREE.Vector3(0,0,0);
        return (<Object3D quaternion={quaternion0} position={position}>
                    <Mesh position={position} geometry={geometry} material={material} />
                </Object3D>)

    }
})

export default Map