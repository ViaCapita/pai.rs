var PersonDoc = DS.Model.extend({

  person: DS.belongsTo('skill'),

  doc: DS.belongsTo('skill'),

  created_by_person: DS.belongsTo('skill')

});

export default PersonDoc;

