import EventEmitter from 'event-emitter';
import keydrown from 'keydrown';
import keys from './keys';

const emitter = new EventEmitter();

for (let key of Object.keys(keys)) {
    keydrown[key].down(() => {
        emitter.emit(key, key);
    })
}

class KeyEventEmitter {
    on(keys, onPress) {
        let keyArray = [].concat(keys);
        for (let key of keys) {
            emitter.on(key, onPress);
        }
    }

    off(keys, onPress) {
        let keyArray = [].concat(keys);
        for (let key of keys) {
            emitter.off(key, onPress);
        }
    }
}

export default new KeyEventEmitter();