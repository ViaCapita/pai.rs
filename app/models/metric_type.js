var belongsTo = DS.belongsTo, hasMany = DS.hasMany, attr = DS.attr;

/*global Ember*/
var MetricType = DS.Model.extend({
  name: attr('string'),
  desc: attr('string'),
  seq: attr('number')});
 
// probably should be mixed-in...
MetricType.reopenClass({
  FIXTURES: [
  {
    id: 0, 
    name: 'sample', 
    desc: 'sample', 
    seq: 1
  },
  
  {
    id: 1, 
    name: 'sample', 
    desc: 'sample', 
    seq: 1
  }
  
]});

export default MetricType;