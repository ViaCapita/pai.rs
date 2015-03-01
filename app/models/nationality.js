import DS from 'ember-data';

var Nationality = DS.Model.extend({ 
  person : DS.belongsTo('person'), 
  country: DS.belongsTo('country'), 
  culture: DS.belongsTo('culture'), 
  active : DS.attr('boolean'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default Nationality;