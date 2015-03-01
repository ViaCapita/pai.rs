import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  url: DS.attr('string'),
  type: DS.belongsTo('social-media-type', { async: true })
});

