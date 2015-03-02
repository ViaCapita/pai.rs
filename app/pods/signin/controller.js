import Ember from 'ember';

var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default Ember.Controller.extend({
	passwordError: null,
	hasPasswordError: Ember.computed.bool('passwordError'),
	valid: Ember.computed.and('emailValidated', 'passwordValidated'),
  	emailValidated: Ember.computed.match('model.email',  emailRegExp),
  	passwordValidated: function() {
	  	var str = this.get('model.password');
	    if (!str) {
	        return(false);
	    } else if (str.length < 8) {
	        return(false);
	    } else if (str.length > 50) {
	        return(false);
	    } else if (str.search(/\d/) === -1) {
	        return(false);
	    } else if (str.search(/[a-zA-Z]/) === -1) {
	        return(false);
	    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) !== -1) {
	        return(false);
	    }
	    return(true);
	}.property('model.password'),
	
  	actions: {
    	clearError: function(){
    		this.set('passwordError', null);
    	},
    	authenticate: function(){
    		if(this.get('valid')){
	      		var signin = this.get("model");
				var fb = new window.Firebase('https://pairsapp.firebaseio.com');
				var that = this;
				var emailPassword = {
				  	email    : signin.get('email'),
				  	password : signin.get('password')
				};
	 
				Ember.run(function(){
					fb.authWithPassword(emailPassword, function(error, authData) {
					  	if (error) {
					    	console.log("Login Failed!", error);
					    	that.set('passwordError', error);
					  	} else {
					    	console.log("Authenticated successfully with payload:", authData);
					    	var us = that.get('store').createRecord('user-session');
					    	us.set('uid', authData.uid);
							us.set('provider', authData.provider);
							us.set('auth', authData.auth);
							us.set('expires', authData.expires);
							us.set('email', authData.email);
							us.set('resetPassword', authData.isTemporaryPassword);
							us.save();
							signin.set('session', us);
							signin.save();
					    	that.transitionToRoute("my", "~"+authData.uid);
					    }
					});
				});
    		}
    	}  
  	}
});