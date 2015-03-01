import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  skillType: DS.belongsTo('skill-type', { async: true })
});
