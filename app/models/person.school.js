import DS from 'ember-data';

var PersonSchool = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  school: DS.belongsTo('school'), 
  start: DS.attr('date'), 
  end: DS.attr('date'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default PersonSchool;