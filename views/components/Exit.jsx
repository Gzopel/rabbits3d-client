import React from 'react';
import React3 from 'react-three-renderer';

const THREE = require('three');

const Exit = ({ x, z }) => {
  return (
    <object3D>
      <mesh key={THREE.Math.generateUUID()} position={new THREE.Vector3(x, 1, z)}>
        <circleGeometry
          radius={20}
          segments={32}
        />
        <meshBasicMaterial
          color={0x0000ff}
          side={THREE.DoubleSide}
        />
      </mesh>
    </object3D>
  );
};

Exit.propTypes = {
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired,
};

export default Exit;
