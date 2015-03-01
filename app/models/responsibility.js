import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({ 
  position: 	DS.belongsTo('position', { async: true }),
  type: 		DS.belongsTo('responsibility-type', { async: true })
});