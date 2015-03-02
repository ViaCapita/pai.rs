import Ember from 'ember';

export default Ember.View.extend({
  classNames: 'base',
  
  click: function(e){
    if (Ember.$(e.target).is('.base')){
      Ember.$('ul.dropdown-menu').hide();
    }
  }
});