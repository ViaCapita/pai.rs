import DS from 'ember-data';

export default DS.Model.extend({ 
  name: 		     DS.attr('string'),
  description:       DS.attr('string'),
  position: 	     DS.belongsTo('position'),
  qualifications: 	 DS.hasMany('qualification'),
  requirementType: 	 DS.belongsTo('requirement-type')
});