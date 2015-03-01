import DS from 'ember-data';

var Company = DS.Model.extend({ 
  name: DS.attr('string'),   
  description: DS.attr('string'),   
  url: DS.attr('string'), 
  stockExchange: DS.attr('string'),
  stockSymbol: DS.attr('string'),
  locations: DS.hasMany('location', { async: true }),
  industries: DS.hasMany('industry', { async: true })	
});

export default Company;