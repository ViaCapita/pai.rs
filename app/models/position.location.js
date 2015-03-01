import DS from 'ember-data';

var PositionCompanyLocation = DS.Model.extend({ 
  position: DS.belongsTo('position'), 
  companyLocation: DS.belongsTo('companyLocation')	
});

export default PositionCompanyLocation;