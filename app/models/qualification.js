import DS from 'ember-data';

var Qualification = DS.Model.extend({ 
  name: DS.attr('string'), 
  shortname: DS.attr('string'), 
  qualificationType: DS.belongsTo('qualificationType'), 
  subject: DS.belongsTo('subject'), 
  qualificationBody: DS.belongsTo('qualification-body'),
  skillContext: DS.belongsTo('skill-context') 
});

export default Qualification;