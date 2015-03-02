import DS from 'ember-data';

export default DS.Model.extend({
  email: 		  DS.attr('string'),
  requestDate: DS.attr('date')
});