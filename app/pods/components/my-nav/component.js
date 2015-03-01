import Ember from "ember";

export default Ember.Component.extend({
    chatActive: false,
  	actions: {
    	toggleChat: function () {
    		if(this.get('chatActive'))
    		{
    			this.set('chatActive', false);
    			Ember.$(".right-side-wrapper").removeClass('sidebar-active');
    		}
    		else
    		{
    			this.set('chatActive', true);
    			Ember.$(".right-side-wrapper").addClass('sidebar-active');
    		}
		}
	}
});
