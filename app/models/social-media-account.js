import DS from 'ember-data';

export default DS.Model.extend({
  person: DS.belongsTo('person'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  socialMedia: DS.belongsTo('social-media', { async: true })
});