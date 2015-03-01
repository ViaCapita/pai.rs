import DS from 'ember-data';

export default DS.Model.extend({
  note: 		DS.attr('string'),
  answer: 		DS.belongsTo('answer'),
  candidate: 	DS.belongsTo('candidate'),
  respondedAt: 	DS.attr('date')
});