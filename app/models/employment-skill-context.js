export default DS.Model.extend({
  employment: DS.belongsTo('employment'),
  skillContext: DS.belongsTo('skill-context')
});