import DS from 'ember-data';

var Doc = DS.Model.extend({
  name: DS.attr('string'),
  docType: DS.belongsTo('skill'),
  file_location: DS.attr('string'),
  fileType: DS.belongsTo('skill'),
  created_on: DS.attr('date'),

  is_active: DS.attr('boolean')

});

export default Doc;

