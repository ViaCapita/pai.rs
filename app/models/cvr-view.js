import DS from 'ember-data';

export default DS.Model.extend({ 
  cvrViewer: DS.belongsTo('cvrViewer'), 
  ipAddress: DS.attr('string'), 
  started: DS.attr('date'), 
  ended: DS.attr('date'), 
  downloaded: DS.attr('boolean'),
  active: DS.attr('boolean')	
});