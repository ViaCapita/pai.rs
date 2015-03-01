import DS from 'ember-data';

var PositionAccomplishment = DS.Model.extend({ 
  position: DS.belongsTo('position'), 
  accomplishment: DS.belongsTo('accomplishment'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default PositionAccomplishment;