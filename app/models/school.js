import DS from 'ember-data';

export default DS.Model.extend({ 
  name: 	   DS.attr('string'), 
  description: DS.attr('string'), 
  url: 		   DS.attr('string'), 
  language:    DS.belongsTo('language', { async: true }), 
  campuses:    DS.hasMany('campus', { async: true })
});