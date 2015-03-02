import DS from 'ember-data';

export default DS.Model.extend({ 
  tag:         DS.belongsTo('tag'), 
  proficiency: DS.belongsTo('proficiency-type'),
});