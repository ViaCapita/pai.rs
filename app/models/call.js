import DS from 'ember-data';

export default DS.Model.extend({
  opening: 	 	DS.belongsTo('question'),
  candidate: 	DS.belongsTo('candidate'),
  recruiter: 	DS.belongsTo('recruiter'),
  startedAt: 	DS.attr('date'),
  completedAt: 	DS.attr('date'),
  notes: 		DS.attr('string')
});