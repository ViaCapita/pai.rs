import DS from 'ember-data';

var Contact = DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  title: DS.attr('string'),
  company: DS.belongsTo('company'),
  fullName: function() {
    return this.get('first') + " " + this.get('last');
  }.property('first', 'last'),
});
 
// probably should be mixed-in...
Contact.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    first: 'John',
    last: 'Smith',
    title: 'CTO',
    company: '1'
  },
  {
    id: '2', 
    first: 'Ian',
    last: 'Maxwell',
    title: 'IT Director',
    company: '2'
  },
  {
    id: '3', 
    first: 'Jason',
    last: 'Sandera',
    title: 'Director of Purchasing',
    company: '3'
  },
  {
    id: '4', 
    first: 'Bob',
    last: 'Allen',
    title: 'COO',
    company: '4'
  }
]});

export default Contact;