import TypeModel from 'pairs/models/type-model';
import DS from 'ember-data';

export default TypeModel.extend({ 
  participants: 	DS.hasMany('person', { async: true }), 
  type:           DS.belongsTo('pairing-session-status', { async: true }), 
  status:         DS.belongsTo('pairing-session-status', { async: true }), 
  scheduledStart: DS.attr('date'), 
  scheduledEnd:   DS.attr('date'),
  started:        DS.attr('date'), 
  completed:      DS.attr('date'),
  skillContext:   DS.belongsTo('skill-context', { async: true }) 
});
