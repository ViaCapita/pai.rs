import DS from 'ember-data';

export default DS.Model.extend({ 
  training: 	DS.belongsTo('training', { async: true }), 
  skill: 		DS.belongsTo('skill', { async: true }), 
  proficiency: 	DS.belongsTo('proficiency', { async: true })	
});