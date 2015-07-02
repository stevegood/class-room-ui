let constants = require('../constants/ClassConstants');
module.exports = {
  addClass: function(title, description) {
    this.dispatch(constants.ADD_CLASS, {
      title: title,
      description: description
    });
  },

  removeClass: function(_class) {
    this.dispatch(constants.REMOVE_CLASS, _class);
  },

  updateClass: function(_class) {
    this.dispatch(constants.UPDATE_CLASS, _class);
  }
}
