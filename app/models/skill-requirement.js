import DS from 'ember-data';

export default DS.Model.extend({
  skill: 	DS.belongsTo('skill'),
  position: DS.belongsTo('position'),
  proficiencyType: DS.belongsTo('proficiency-type', { async: true }),
  requirementType: DS.belongsTo('requirement-type', { async: true })
});