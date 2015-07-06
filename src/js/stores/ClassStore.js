let classCounter = 0,
    localStorageKey = 'classes';

function getClassById(list, id) {
  return _.find(list, function(item){
    return item.id === id;
  });
}

let ClassStore = Reflux.createStore({
  listenables: [ClassActions],
  onAddClass: function(title, description) {
    let now = new Date();
    this.updateList([{
      id: classCounter++,
      created_at: now,
      updated_at: now,
      title: title,
      description: description
    }].concat(this.list));
  },

  onUpdateClass: function(id, title, description) {
    let _class = getClassById(id)
    if (!_class) {
      return;
    }

    _class.title = title;
    _class.description = description;
    _class.updated_at = new Date();

    this.updateList(this.list);
  },

  onRemoveClass: function(id) {
    this.updateList(_.filter(this.list, function(item){
      return item.id !== id;
    }));
  },

  getInitialState: function() {
    let loadedList = localStorage.getItem(localStorageKey);
    if (!loadedList) {
      let now = new Date();
      this.list = [{
        id: classCounter++,
        created_at: now,
        updated_at: now,
        title: 'Sample Class',
        description: 'This is a sample class that can be used to get you started'
      }];
    } else {
      this.list = _.map(JSON.parse(loadedList), function(item){
        item.id = classCounter++;
        return item;
      });
    }
    return {list: this.list};
  }
});
module.exports = ClassStore;
