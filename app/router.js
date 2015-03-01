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

	this.resource('home', { path: '/cvr' }, function() {
		this.route('showcase');
		this.route('faq');
		this.route('about');
		this.route('careers');
		this.route('apps');
	});	

	this.resource('profile', { path: '/:profile_slug' }, function() {
		this.resource('public-portfolio', { path: '/portfolio' }, function() {
			this.route('item');
		});
		this.resource('experience', function() {
			this.route('item');
		});
		this.resource('education', function() {
			this.route('item');
		});
		this.resource('academic', function() {
			this.route('item');
		});
		this.resource('other', function() {
			this.route('item');
		});
		this.resource('about', function() {
			this.route('item');
		});
		this.resource('contact', function() {
			this.route('item');
		});
	});

	this.resource('our', function() {
		this.resource('candidate', function() {
		  	this.resource('candidate-stream', { path: '/stream' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:stream_slug' });
		  	});
		  	this.resource('candidate-applications', { path: '/applications' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:candidate-application_slug' });
		  	});
		  	this.resource('candidate-bookmarks', { path: '/bookmarks' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:candidate-bookmark_slug' });
		  	});
		});	

		this.resource('openings', function() {
			this.route('add');
			this.route('edit', { path: '/:opening_slug' });	

		  	this.resource('candidate-applications', { path: '/:opening_slug/applications' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:candidate-application_slug' });
		  	});
		  	this.resource('candidate-searches', { path: '/:opening_slug/searches' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:candidate-search_slug' });
		  	});
		  	this.resource('candidate-suggestions', { path: '/:opening_slug/suggestions' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:candidate-suggestions_slug' });
		  	});
		});	
	});

	this.resource('my', function() {
		this.route('dashboard');
		this.resource('portfolio', function() {
			this.route('add');
			this.route('edit', { path: '/:portfolio_slug' });
		  	this.resource('images', function() {
		  		this.route('add');
				this.route('edit', { path: '/:image_slug' });
		  	});
		  	this.resource('videos', function() {
		  		this.route('add');
				this.route('edit', { path: '/:video_slug' });
		  	});
		  	this.resource('documents', function() {
		  		this.route('add');
				this.route('edit', { path: '/:writing_slug' });
		  	});
		  	this.resource('projects', function() {
		  		this.route('add');
				this.route('edit', { path: '/:project_slug' });
		  	});
		});		  	
		this.resource('positions', function() {
	  		this.route('add');
			this.route('edit', { path: '/:position_slug' });
	  	});
		this.resource('companies', function() {
			this.route('add');
			this.route('edit', { path: '/:company_slug' });
		});
		this.resource('schools', function() {
			this.route('add');
			this.route('edit', { path: '/:school_slug' });
		  	this.resource('programs', function() {
		  		this.route('add');
				this.route('edit', { path: '/:program_slug' });
		  	});
		});
		this.resource('publications', function() {
			this.route('item');
		});
		this.resource('awards', function() {
			this.route('item');
		});
		this.resource('personal', function() {
			this.route('edit');
		}); 
		this.resource('accomplishments', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:accomplishment_slug' });
		});
		this.resource('aspirations', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:aspiration_slug' });
		});
		this.resource('countries', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:country_slug' });
		});
		this.resource('languages', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:language_slug' });
		});
		this.resource('degrees', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:degree_slug' });
		});
		this.resource('qualifications', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:qualification_slug' });
		});
		this.resource('recruiters', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:recruiter_slug' });
		});
		this.resource('references', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:reference_slug' });
		});
		this.resource('social-media', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:social-media_slug' });
		});
		this.resource('skills', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:skill_slug' });
		});
		this.resource('viewers', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:viewer_slug' });
		});
		this.resource('work-eligibility', function() {
		  	this.route('wizard');
		  	this.route('add');
			this.route('edit', { path: '/:work-eligibility_slug' });
		});

		this.resource('job', function() {
		  	this.resource('job-stream', { path: '/stream' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:stream_slug' });
		  	});
		  	this.resource('job-recommendations', { path: '/recommendations' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:job-recommendation_slug' });
		  	});
		  	this.resource('job-applications', { path: '/applications' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:job-application_slug' });
		  	});
		  	this.resource('job-bookmarks', { path: '/bookmarks' }, function() {
		  		this.route('add');
				this.route('edit', { path: '/:job-bookmark_slug' });
		  	});
		});	

		this.resource('account', function() {
			this.route('details');
			this.route('settings');
			this.route('permissions');
		});	
	});
});

export default Router;

