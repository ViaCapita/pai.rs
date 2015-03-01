var PersonCountry = DS.Model.extend({

  person: DS.belongsTo('skill'),

  country: DS.belongsTo('skill'),

  first_lived: DS.attr('date'),

  last_lived: DS.attr('date'),

  is_current: DS.attr('boolean'),

  residencyType: DS.belongsTo('skill')

});

export default PersonCountry;

