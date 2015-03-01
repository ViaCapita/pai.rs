import DS from 'ember-data';

export default DS.Model.extend({
  session:      DS.belongsTo('user-session'),
  email:   		DS.attr('string'),
  password: 	DS.attr('string'),
  signinDate: 	DS.attr('date')
});