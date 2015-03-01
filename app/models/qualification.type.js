var belongsTo = DS.belongsTo, hasMany = DS.hasMany, attr = DS.attr;

var QualificationType = DS.Model.extend({ 
  name : attr('string'), 
  desc : attr('string'), 
  sequence : attr('number'), 
  culture : belongsTo('culture'), 
  schoolQualification : attr('string'), 
  active : attr('boolean'), 
  created : attr('date'), 
  updated : attr('date')	
});

export default QualificationType;