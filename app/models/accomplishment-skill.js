import DS from 'ember-data';

export default DS.Model.extend({
  accomplishment: 	DS.belongsTo('accomplishment', { async: true }),
  skill: 			DS.belongsTo('skill', { async: true }),
  importanceType: 	DS.belongsTo('importance-type', { async: true }),
  usage: 			DS.attr('string')
});