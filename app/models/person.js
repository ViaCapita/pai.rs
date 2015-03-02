import DS from 'ember-data';

export default DS.Model.extend({ 
  organizations:  DS.belongsTo('organization'),
  created: 	      DS.attr('date'),
  username: 	    DS.attr('string'),
  firstName: 	    DS.attr('string'),
  lastName: 	    DS.attr('string'),
  pairings:       DS.hasMany('pairing')
});