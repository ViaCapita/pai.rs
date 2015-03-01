var PersonLocation = DS.Model.extend({

  person: DS.belongsTo('skill'),

  name: DS.attr('string'),

  is_primary: DS.attr('boolean'),

  address_a: DS.attr('string'),

  address_b: DS.attr('string'),

  address_c: DS.attr('string'),

  postal_code: DS.attr('string'),

  city: DS.attr('string'),

  city_region: DS.attr('string'),

  country: DS.belongsTo('skill'),

  telephone: DS.attr('string'),

  startDate: DS.attr('date'),

  endDate: DS.attr('date'),

  mobile_phone: DS.attr('string')

});

export default PersonLocation;

