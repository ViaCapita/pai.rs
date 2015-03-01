import Ember from "ember";

export default Ember.Component.extend({
  tagName: "li",
  classNames: "page-scroll",  
  name: "Dropdown",
  links: [
    {
      name: "Test 1",
      action: "experience"
    },
    {
      name: "Test 1",
      action: "experience"
    },
    {
      name: "Test 1",
      action: "experience"
    },
    {
      name: "Test 1",
      action: "experience"
    },
    {
      name: "Test 1",
      action: "experience"
    }
  ],
  expanded: false,
  actions: {
      toggleExpanded : function(){
        this.toggleProperty('expanded');
      },
  },
});