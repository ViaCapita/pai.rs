import DS from 'ember-data';

var Reference = DS.Model.extend({ 
  richContent:    DS.attr('string'), 
  referee:        DS.belongsTo('person', { async: true }), 
  referrer:       DS.belongsTo('person', { async: true }), 
  referenceDate:  DS.attr('date'), 
  startDate:      DS.attr('date'), 
  endDate:        DS.attr('date'), 
  positions:      DS.hasMany('position', { async: true }),
  companies:      DS.hasMany('company', { async: true }),
  schools:        DS.hasMany('school', { async: true }),
  active:         DS.attr('boolean'), 
  language:       DS.belongsTo('language', { async: true }), 
  referenceType:  DS.belongsTo('referenceType', { async: true })	
});

export default Reference;