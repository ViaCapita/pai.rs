import DS from 'ember-data';

var CompanyAccomplishment = DS.Model.extend({ 
  person: DS.belongsTo('person'),
  company: DS.belongsTo('company'), 
  accomplishment: DS.belongsTo('accomplishment'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date'), 
  active: DS.attr('boolean')	
});

export default CompanyAccomplishment;