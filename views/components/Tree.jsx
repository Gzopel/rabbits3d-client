import React from 'react';
import React3 from 'react-three-renderer';

const THREE = require('three');

const Tree = ({ x, z }) => {
  return (
    <object3D>
      <mesh key={THREE.Math.generateUUID()} position={new THREE.Vector3(x, 45, z)}>
        <sphereGeometry radius={20} widthSegments={32} heightSegments={32} />
        <meshBasicMaterial color={0x004f00} />
      </mesh>

      <mesh key={THREE.Math.generateUUID()} position={new THREE.Vector3(x, 15, z)}>
        <cylinderGeometry radiusTop={6} radiusBottom={6} height={30} radialSegments={32} />
        <meshBasicMaterial color={0x5c2500} />
      </mesh>
    </object3D>
  );
};

Tree.propTypes = {
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired,
};

export default Tree;
