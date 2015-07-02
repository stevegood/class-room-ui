let constants = require('../constants/ClassConstants');

let ClassStore = Fluxxor.createStore({
  initialize: function() {
    this.classId = 1;
    this.classes = {};

    this.classes[1] = {
      id: 1,
      title: 'This is a test',
      description: 'This is just a test.'
    };

    this.bindActions(
      constants.ADD_CLASS,
      constants.READ_CLASSES,
      constants.REMOVE_CLASS,
      constants.UPDATE_CLASS
    );
  },

  onAddClass: function(payload) {
    let id = this._nextClassId();
    let _class = {
      id: id,
      title: payload.title,
      description: payload.description
    };

    this.classes[id] = _class;
    this.emit("change");
  },

  onReadClasses: function() {
    // TODO: I have no idea what to do here...
  },

  onRemoveClass: function(payload) {
    delete this.classes[payload.id];
    this.emit("change");
  },

  onUpdateClass: function(payload) {
    this.classes[payload.id] = payload;
    this.emit("change");
  },

  getState: function() {
    return {
      classes: this.classes
    };
  },

  _nextClassId: function() {
    return ++this.classId;
  }
});

module.exports = ClassStore;
