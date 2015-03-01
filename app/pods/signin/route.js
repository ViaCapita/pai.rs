import Ember from "ember";

export default Ember.Route.extend({
	model: function(params){
		var signin = this.get('store').createRecord('user-signin');
		signin.set("signinDate", new Date());
		return signin;
	}
	// ,
	
 //  	actions: {
 //    	authenticate: function(){
	//       	var signin = this.get("model");
	//       	var authDataOrError = this.session.authenticate(signin.get('email'), signin.get('password'));
	//       	if(authDataOrError.authData){
	// 			this.transitionToRoute("home.about");
	//       	}
 //    	}  
 //  	}
});