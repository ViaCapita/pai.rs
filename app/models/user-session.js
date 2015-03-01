import DS from 'ember-data';

export default DS.Model.extend({
  user:     	DS.belongsTo('user'),
  uid:    		DS.attr('string'), 
  provider:    	DS.attr('string'),  
  auth:    		DS.attr(),  
  expires:    	DS.attr('number'),  
  email:    	DS.attr('string'),  
  isTempPword: 	DS.attr('boolean')
});