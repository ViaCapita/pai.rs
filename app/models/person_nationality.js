var PersonNationality = DS.Model.extend({



  person: DS.belongsTo('skill'),

  country: DS.belongsTo('skill'),

  nationalityType: DS.belongsTo('skill'),

  date_acquired: DS.attr('date')

});

export default PersonNationality;

