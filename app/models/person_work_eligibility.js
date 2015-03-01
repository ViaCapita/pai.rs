var PersonWorkEligibility = DS.Model.extend({



  person: DS.belongsTo('skill'),

  work_eligibility: DS.belongsTo('skill'),

  startDate: DS.attr('date'),

  endDate: DS.attr('date'),

  details: DS.attr('string')

});

export default PersonWorkEligibility;

