import DS from 'ember-data';

export default DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  email: DS.attr('string'), 
  displayConfig: DS.belongsTo('display-config'), 
  confirmationCode: DS.attr('string'), 
  // downloadTemplate: DS.attr('cvrTemplate'), 

  expires: DS.attr('date'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date'), 
  active: DS.attr('boolean')//,


  // allowDownload: DS.attr('boolean'), 	
});