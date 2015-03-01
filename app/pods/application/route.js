import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      toggleChat: function () {
        this.controller.toggleProperty('chatActive');
    }
  }
});