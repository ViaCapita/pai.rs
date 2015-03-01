import DS from 'ember-data';

export default DS.Model.extend({ 
  person: 		  DS.belongsTo('person', { async: true }), 
  school: 		  DS.belongsTo('school', { async: true }), 
  accomplishment: DS.belongsTo('accomplishment', { async: true })
});