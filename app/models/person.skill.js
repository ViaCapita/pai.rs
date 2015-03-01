import DS from 'ember-data';

var PersonSkill = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  skill: DS.belongsTo('skill'), 
  proficiency: DS.belongsTo('proficiency'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default PersonSkill;