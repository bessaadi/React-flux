import EventEmitter from 'eventemitter3';

const CHANGE_EVENT = 'change';

class Store extends EventEmitter {

  constructor() {
    super();
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getListeners() {
    return this.listeners(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

Store.dispatchToken = null;

export default Store;
