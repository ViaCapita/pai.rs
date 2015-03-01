var PersonTraining = DS.Model.extend({



  person: DS.belongsTo('skill'),

  training: DS.belongsTo('skill'),

  reason: DS.attr('string'),

  startDate: DS.attr('date'),

  endDate: DS.attr('date')

});

export default PersonTraining;

