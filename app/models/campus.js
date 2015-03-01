import DS from 'ember-data';

export default DS.Model.extend({
  school: 	DS.belongsTo('school'),
  name: 	DS.attr('string'),
  primary: 	DS.attr('boolean'),
  location: DS.belongsTo('location')
});