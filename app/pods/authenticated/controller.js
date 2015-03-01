import Ember from 'ember';

export default Ember.Controller.extend({
    loggedIn: Ember.computed.alias('session.isConnected'),
    // chatActive: false,
  	actions: {
  //   	toggleSidebar: function () {
  //   		if(this.get('hasClass'))
  //   		{
  //   			this.set('hasClass', false);
  //   			Ember.$(".right-side-wrapper").removeClass('sidebar-active');
  //   		}
  //   		else
  //   		{
  //   			this.set('hasClass', true);
  //   			Ember.$(".right-side-wrapper").addClass('sidebar-active');
  //   		}
		// },
		sendNewMessage: function (messageBody, messageRoom) {
    		var message = this.store.createRecord('message');
    		message.messageBody = this.get('newMessageBody');
    		message.messageRoom = this.get('messageRoom');
    		message.sender = this.session.get('user');
    		message.sentAt = new Date();
		}
	}
});