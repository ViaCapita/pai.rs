import DS from 'ember-data';

export default DS.Model.extend({ 
  created: 	DS.attr('date'),
  createdAt: 	DS.attr('date'),
  username: 	DS.attr('string'),
  firstName: 	DS.attr('string'),
  lastName: 	DS.attr('string') 
});