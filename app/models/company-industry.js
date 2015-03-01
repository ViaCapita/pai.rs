import DS from 'ember-data';

var CompanyIndustry = DS.Model.extend({

  company: DS.belongsTo('skill'),

  industry: DS.belongsTo('skill'),

  is_primary: DS.attr('boolean')

});

export default CompanyIndustry;

