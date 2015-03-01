var JobSpecification = DS.Model.extend({



  company: DS.belongsTo('skill'),

  name: DS.attr('string'),

  positionType: DS.belongsTo('skill'),

  is_active: DS.attr('boolean'),

  created_on: DS.attr('date'),

  openDate: DS.attr('date'),

  closedDate: DS.attr('date'),

  title: DS.attr('string'),

  about_company: DS.attr('string'),

  about_position: DS.attr('string'),

  about_candidate: DS.attr('string'),

  how_to_apply: DS.attr('string'),

  salary_min: DS.attr('number'),

  salary_max: DS.attr('number'),

  salaryType: DS.attr('number'),

  currencyType: DS.attr('string')

});

export default JobSpecification;

