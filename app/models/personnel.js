import DS from 'ember-data';

var Personnel = DS.Model.extend({ 
  prefix: DS.attr('string'), 
  firstName: DS.attr('string'), 
  middleName: DS.attr('string'), 
  lastName: DS.attr('string'), 
  suffix: DS.attr('string'), 
  role: DS.attr('string'),
  homeEmail: DS.attr('string'), 
  workEmail: DS.attr('string'), 
  officePhone: DS.attr('string'), 
  mobilePhone: DS.attr('string'), 
  linkedIn: DS.attr('string'), 
  twitter: DS.attr('string'), 
  skype: DS.attr('string'),
  interests: DS.hasMany('interest', { async: true }),
  projects: DS.hasMany('project', { async: true })	
});

export default Personnel;
