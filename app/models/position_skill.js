var PositionSkill = DS.Model.extend({



  position: DS.belongsTo('skill'),

  skill: DS.belongsTo('skill'),

  proficiencyType: DS.belongsTo('skill'),

  frequencyType: DS.belongsTo('skill')

});

export default PositionSkill;

