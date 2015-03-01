var PersonSchool = DS.Model.extend({



  person: DS.belongsTo('skill'),

  school: DS.belongsTo('skill'),

  startDate: DS.attr('date'),

  endDate: DS.attr('date'),

  is_active: DS.attr('boolean')

});

export default PersonSchool;

