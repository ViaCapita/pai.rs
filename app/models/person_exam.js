var PersonExam = DS.Model.extend({



  person: DS.belongsTo('skill'),

  exam: DS.belongsTo('skill'),

  mark: DS.attr('string'),

  examDate: DS.attr('date'),

  is_completed: DS.attr('boolean')

});

export default PersonExam;

