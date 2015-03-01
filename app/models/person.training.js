import DS from 'ember-data';

var PersonTraining = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  training: DS.belongsTo('training'), 
  reason: DS.attr('string'), 
  start: DS.attr('date'), 
  end: DS.attr('date')	
});

export default PersonTraining;