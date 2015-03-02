import Ember from "ember";

export default Ember.Route.extend({
  model: function(){
  	var invite = this.get('store').createRecord('invitation-request');
  	invite.set("requestDate", new Date());
    return invite;
  }
});