import Ember from 'ember';

export default Ember.Controller.extend({
    loggedIn: Ember.computed.alias('session.isConnected'),
    // chatActive: false,
  	actions: {
  //   	toggleChat: function (value) {
  //   		this.set('chatActive', value);
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