import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  trainingType: DS.belongsTo('training-type', { async: true }),
  skillContext: DS.belongsTo('skill-context', { async: true }) 	
});