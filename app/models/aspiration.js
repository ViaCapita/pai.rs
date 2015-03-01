import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  person:  DS.belongsTo('person')
});