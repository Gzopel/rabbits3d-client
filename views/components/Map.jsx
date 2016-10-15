import React from 'react';
import React3 from 'react-three-renderer';

const Three = require('three');

const Map = ({ children, onClick }) => {
  return (
    <object3D>
      <axisHelper size={800} />
      <object3D rotation={new Three.Euler(-Math.PI / 2, 0, 0)}>
        <mesh key="map" position={new Three.Vector3(0, 0, 0)} onClick={onClick}>
          <planeGeometry
            width={1600}
            height={1600}
            widthSegments={1}
            heightSegments={1}
          />
          <meshBasicMaterial
            color={0x8bd838}
            side={Three.DoubleSide}
          />
        </mesh>
      </object3D>
      { children }
    </object3D>
  );
};

Map.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};


export default Map;
