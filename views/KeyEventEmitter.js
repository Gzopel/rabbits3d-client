import EventEmitter from 'event-emitter';
import keydrown from 'keydrown';
import KEYS from './keys';

const emitter = new EventEmitter();

for (const key of Object.keys(KEYS)) {
  keydrown[key].down(() => {
    emitter.emit(key, key);
  });
}

class KeyEventEmitter {
  on(keys, onPress) {
    const keyArray = [].concat(keys);
    for (const key of keyArray) {
      emitter.on(key, onPress);
    }
  }

  off(keys, onPress) {
    const keyArray = [].concat(keys);
    for (const key of keyArray) {
      emitter.off(key, onPress);
    }
  }
}

export default new KeyEventEmitter();