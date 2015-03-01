var PersonProfile = DS.Model.extend({



  person: DS.belongsTo('skill'),

  title: DS.attr('string'),

  description: DS.attr('string')

});

export default PersonProfile;

