import DS from 'ember-data';

export default DS.Model.extend({
  person: 	DS.belongsTo('person'),
  title: 	DS.attr('string'),
  posts: 	DS.belongsTo('post')
});