import DS from 'ember-data';

export default DS.Model.extend({
  language:     DS.belongsTo('language'),
  type:         DS.belongsTo('requirement-type'),
  proficiency:  DS.belongsTo('language-proficiency')
});