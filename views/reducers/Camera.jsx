var THREE =require('three')

const mapRotationToVector = (rotation)=> {
    let vector = null;
    switch (rotation) {
        case 'UP':
            vector =new THREE.Vector3(0, 1, 0)
            break;
        case 'LEFT':
            vector =new THREE.Vector3(-1, 0, 0)
            break;
        case 'DOWN':
            vector =new THREE.Vector3(0, -1, 0)
            break;
        case 'RIGHT':
            vector =new THREE.Vector3(1, 0, 0)
            break;
       // case 'RESET':
       //     break;
        default:
            vector = new THREE.Vector3(0, 0, 0)
    }
    return vector;
}

const CameraReducer = (state = new THREE.Vector3(0, 0, 0), action) => {
    switch (action.type) {
        case 'ROTATE_CAMERA':
            return {
                rotationVector: state.rotationVector.add(mapRotationToVector(action.rotation))
            }
        default:
            return state
    }
}

export default CameraReducer