import DS from 'ember-data';

export default DS.Model.extend({
  person: 		DS.belongsTo('person'),
  company: 		DS.belongsTo('company'),
  organization: DS.belongsTo('organization'),
  status: 		DS.belongsTo('candidate-status'),
  calls: 		DS.hasMany('call'),
  openings: 	DS.hasMany('opening')
});