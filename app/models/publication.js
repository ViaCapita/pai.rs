import DS from 'ember-data';

export default DS.Model.extend({ 
  title: DS.attr('string'),
  type: DS.attr('string'), 
  publicationData: DS.attr('string'), 
  imageUrl: DS.attr('string'),  
  downloadUrl: DS.attr('string'), 
  externalUrl: DS.attr('string'), 
  publicationDate: DS.attr('date'),
  authors: DS.hasMany('person', { async: true })
});
