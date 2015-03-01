import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('file-picker-text').then(function(docs) {
      return docs;
    });
  },
  setupController: function (controller, model) {
    controller.set('errors', []);
    controller.set('model', model);
  }
});
