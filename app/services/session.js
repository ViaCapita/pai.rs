import Ember from 'ember';
import ENV from 'pairs/config/environment';

export default Ember.Controller.extend({
	userSession: null,
	user:     	null,
	uid:    	null, 
	provider:   null,  
	auth:    	null,  
	expires:    null,  
	email:    	null,  
	resetPassword: null
});