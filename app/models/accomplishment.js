import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({ 
  person: 		DS.belongsTo('person', { async: true }), 
  type: 		DS.belongsTo('accomplishment-type'), 
  started: 		DS.attr('date'), 
  completed: 	DS.attr('date'),
  skillContext: DS.belongsTo('skill-context') 
});
