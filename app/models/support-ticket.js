import DS from 'ember-data';

export default DS.Model.extend({ 
  url:          DS.attr('string'),
  title:        DS.attr('string'),
  description:  DS.attr('string'),
  parentTicket: DS.belongsTo('supportTicket', { async: true }),
  user:         DS.belongsTo('user', { async: true }),
  organization: DS.belongsTo('organization', { async: true }),
  attachments:  DS.hasMany('attachment', { async: true }),
  priority:     DS.belongsTo('priority', { async: true }),
  type:         DS.belongsTo('ticketType', { async: true }),
  status:       DS.belongsTo('ticketStatus', { async: true })
});