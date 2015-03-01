import Ember from 'ember';

export default Ember.View.extend({
  classNames: 'base',
  
  click: function(e){
    if ($(e.target).is('.base')){
      $('ul.dropdown-menu').hide();
    }
  }
});