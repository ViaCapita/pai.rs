import DS from 'ember-data';

export default DS.Model.extend({ 
  lastLogIn:     DS.attr('date'),
  uid:    		DS.attr('string'),
  email:  		DS.attr('string'), 
  person:       DS.belongsTo('person', { async: true })
  // ,
  // language:     DS.belongsTo('language', { async: true })
});