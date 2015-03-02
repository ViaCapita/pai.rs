import DS from 'ember-data';

export default DS.Model.extend({ 
  organizations:  DS.belongsTo('organization'),
  created: 	      DS.attr('date'),
  username: 	    DS.attr('string'),
  firstName: 	    DS.attr('string'),
  lastName: 	    DS.attr('string'),
  pairingRequests: DS.hasMany('pairing', { inverse: 'requester' }),
  pairingResponses: DS.hasMany('pairing', { inverse: 'responder' })
});