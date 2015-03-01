import Ember from 'ember';

var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default Ember.Controller.extend({
	passwordError: '',
  	emailValidated: Ember.computed.match('model.email',  emailRegExp),
  	passwordConfirmed: function() {
  		return this.get('model.password') && this.get('model.password') === this.get('model.confirmation');
	}.property('model.password',  'model.confirmation'),
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
    	register: function(){
	      var reg = this.get("model");
				var fb = new window.Firebase('https://pairsapp.firebaseio.com');
				var that = this;
				var emailPassword = {
				  	email    : reg.get('email'),
				  	password : reg.get('password')
				};
 
				Ember.run(function(){
					fb.createUser(emailPassword, function(error) {
					  if (error === null) {
					    console.log("User created successfully");
							Ember.run.schedule('actions', this, function(){
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

						      	var username = reg.get('firstName').toLowerCase() + "-" + reg.get('lastName').toLowerCase();;
						      	// TODO: Need to confirm username unique
						      	var person = that.get("store").createRecord('person', {
						      		id: username,
						      		createdAt: new Date(),
						      		firstName: reg.firstName,
						      		lastName: reg.lastName,
						      	}).save();

						      	var user = that.get("store").createRecord('user', {
						      		email: reg.email,
						      		uid: authData.uid,
						      		person: person,
						      	}).save(); 

						      	reg.set('person', person);
						      	reg.set('user', user);
						      	reg.save();

								    that.transitionToRoute("profile", username);
							    }
								});
							});	
					  } else {
					    console.log("Error creating user:", error);
					  }
					});			
				});
    	}  
  	}
});