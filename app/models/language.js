import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'), 
  description: DS.attr('string'), 
  sequence: DS.attr('number'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture')
});