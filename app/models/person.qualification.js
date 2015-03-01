import DS from 'ember-data';

var PersonQualification = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  qualification: DS.belongsTo('qualification'), 
  subject: DS.belongsTo('subject'), 
  school: DS.belongsTo('school'), 
  result: DS.attr('string'), 
  dateAwarded: DS.attr('string'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default PersonQualification;