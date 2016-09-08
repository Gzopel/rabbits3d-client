const mapCharToRotation = (char)=> {
    let rotation = null;
    switch (char) {
        case 105:
            // (i)
            rotation = 'UP'
            break;
        case 106:
            // (j)
            rotation = 'LEFT';
            break;
        case 107:
            // (k)
            rotation = 'DOWN';
            break;
        case 108:
            // (l)
            rotation = 'RIGHT';
            break;
        case 13:
            // (enter)
            rotation = 'RESET';
            break;
    }
    return rotation;
}

export const cameraRotation = (char) => {
    return {
        type: 'ROTATE_CAMERA',
        rotation: mapCharToRotation(char)
    }
}