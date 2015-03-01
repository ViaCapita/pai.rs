var PersonQualification = DS.Model.extend({



  person: DS.belongsTo('skill'),

  qualification: DS.belongsTo('skill'),

  qualification_subject: DS.belongsTo('skill'),

  school: DS.belongsTo('skill'),

  result: DS.attr('string'),

  date_awarded: DS.attr('date'),

  subject: DS.attr('string')

});

export default PersonQualification;

