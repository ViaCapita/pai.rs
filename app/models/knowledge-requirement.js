import DS from 'ember-data';

export default DS.Model.extend({
  tag: 	       DS.belongsTo('skill'),
  proficiency: DS.belongsTo('proficiency-type', { async: true }),
  requirement: DS.belongsTo('requirement-type', { async: true })
});