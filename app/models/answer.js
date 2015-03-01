import DS from 'ember-data';

export default DS.Model.extend({
  displayText: 	DS.attr('string'),
  question: 	DS.belongsTo('question'),
  sequence: 	DS.attr('number'),
  followUps: 	DS.hasMany('question')
});