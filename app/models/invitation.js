import DS from 'ember-data';

export default DS.Model.extend({
  inviter:      DS.belongsTo('person'),
  name:         DS.attr('string'),
  email:        DS.attr('string'),
  organization: DS.belongsTo('organization')
});
