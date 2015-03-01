import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('cities');
  },
  cities: ['Orlando', 'Philadelphia', 'Boston']
});
