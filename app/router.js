import Ember from 'ember';
import config from 'pairs/config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType
});

Router.map(function() {
	this.route('request-invite');	
	this.route('signin');	
	this.route('signout');	
	this.route('register');
	this.resource('about', function() {
		this.route('how-it-works');
		this.route('who-we-are');
		this.route('why-we-did-it');
	});	
	this.resource('my', { path: '/:my_slug' }, function() {
		this.route('dashboard');
		this.resource('profile', function() {
			this.route('images');
			this.route('edit');
		});  	
		this.resource('pairings', function() {
			this.route('request-pair', { path: '/:pairing_slug' });
			this.route('respond-pair', { path: '/:pairing_slug' });
		});		  	
		this.resource('organizations', function() {
	  	this.route('add');
			this.route('images', { path: '/:organization_slug/images' });
			this.route('edit', { path: '/:organization_slug/edit' });
			this.route('invite-users', { path: '/:organization_slug/invite-users' });
	  });
		this.resource('account', function() {
			this.route('details');
			this.route('settings');
			this.route('permissions');
		});	
	});
});

export default Router;

