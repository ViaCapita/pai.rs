import DS from 'ember-data';

export default DS.Model.extend({
  skill: 		DS.belongsTo('skill', { async: true }),
  context:      DS.attr('string'),
  importance:   DS.belongsTo('importance-type', { async: true }),
  proficiency:  DS.belongsTo('proficiency-type', { async: true })  
});