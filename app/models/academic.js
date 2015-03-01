import DS from 'ember-data';

export default DS.Model.extend({ 
  prefix:       DS.attr('string'),  
  suffix:       DS.attr('string'), 
  role:         DS.attr('string'),
  summary:      DS.attr('string'),
  homeEmail:    DS.attr('string'), 
  workEmail:    DS.attr('string'), 
  officePhone:  DS.attr('string'), 
  mobilePhone:  DS.attr('string'), 
  linkedIn:     DS.attr('string'), 
  twitter:      DS.attr('string'), 
  skype:        DS.attr('string'),
  supervisors:  DS.hasMany('academic', { async: true }),
  assistants:   DS.hasMany('academic', { async: true }),
  interests:    DS.hasMany('interest', { async: true }),
  projects:     DS.hasMany('project', { async: true }),
  awards:       DS.hasMany('award', { async: true })	
});

