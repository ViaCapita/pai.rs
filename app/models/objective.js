import DS from 'ember-data';

export default DS.Model.extend({ 
  title: DS.attr('string'), 
  description: DS.attr('string'), 
  person: DS.belongsTo('person'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});