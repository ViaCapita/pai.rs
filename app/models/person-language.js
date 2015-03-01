import DS from 'ember-data';

export default DS.Model.extend({
	person: DS.belongsTo('person'), 	
  	language:        DS.belongsTo('language'),
  	proficiency:     DS.belongsTo('language-proficiency')
});