import DS from 'ember-data';

export default DS.Model.extend({ 
  position: DS.belongsTo('position', { async: true }), 
  currency: DS.belongsTo('currency', { async: true }), 
  salary: 	DS.attr('number'),
  start: 	DS.attr('date'), 
  end: 		DS.attr('date')
  // , 
  // bonuses: 	DS.belongsTo('bonus', { async: true })
  // bonus model needs to be implemented
});