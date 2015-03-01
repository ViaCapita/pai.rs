import DS from 'ember-data';

export default DS.Model.extend({ 
  sender: DS.belongsTo('person', { async: true }),
  messageBody: DS.attr('string'), 
  room: DS.belongsTo('message-room', { async: true }),
  sentAt: DS.attr('date')
});