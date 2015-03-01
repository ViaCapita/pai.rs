import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  type:  DS.belongsTo('role-type', { async: true })
});
