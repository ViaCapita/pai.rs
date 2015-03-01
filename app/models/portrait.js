import DS from 'ember-data';

var Portrait = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  Filename: DS.attr('string'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default Portrait;

