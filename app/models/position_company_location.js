var PositionCompanyLocation = DS.Model.extend({



  position: DS.belongsTo('skill'),

  company_location: DS.belongsTo('skill')

});

export default PositionCompanyLocation;

