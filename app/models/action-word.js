import DS from 'ember-data';

export default DS.Model.extend({
  word: 	  DS.attr('string'),
  actionType: DS.belongsTo('action-type'),
  language:   DS.belongsTo('language')
}); 