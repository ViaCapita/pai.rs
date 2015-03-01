import DS from 'ember-data';

export default DS.Model.extend({
  industry: 	DS.belongsTo('industry'),
  skill: 		DS.belongsTo('skill'),
  importance: 	DS.belongsTo('importance-type')
});

