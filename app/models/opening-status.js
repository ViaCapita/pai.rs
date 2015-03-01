var OpeningStatus = DS.Model.extend({
  name: DS.attr('string'),
  sequence: DS.attr('number')
});
 
OpeningStatus.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'New',
    sequence: 1
  },  
  {
    id: '2', 
    name: 'Started',
    sequence: 2
  },
  {
    id: '3', 
    name: 'Completed',
    sequence: 3
  }
  
]});

export default OpeningStatus;