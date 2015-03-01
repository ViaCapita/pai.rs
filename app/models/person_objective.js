var PersonObjective = DS.Model.extend({



  title: DS.attr('string'),

  description: DS.attr('string'),

  person: DS.belongsTo('skill')

});

export default PersonObjective;

