import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  type:  DS.belongsTo('interest-type')
 });