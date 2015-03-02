import TypeModel from 'pairs/models/type-model';
import DS from 'ember-data';

export default TypeModel.extend({ 
  people:   DS.hasMany('person', { async: true }), 
  account:  DS.belongsTo('account', { async: true })
});
