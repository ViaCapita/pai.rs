var belongsTo = DS.belongsTo, hasMany = DS.hasMany, attr = DS.attr;

var QualificationSkill = DS.Model.extend({ 
  qualification : belongsTo('qualification'), 
  skill : belongsTo('skill'), 
  active : attr('boolean'), 
  culture : belongsTo('culture'), 
  created : attr('date'), 
  updated : attr('date')	
});

export default QualificationSkill;