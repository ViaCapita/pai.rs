var PersonSkill = DS.Model.extend({



  person: DS.belongsTo('skill'),

  skill: DS.belongsTo('skill'),

  proficiencyType: DS.belongsTo('skill'),

  frequencyType: DS.belongsTo('skill')

});

export default PersonSkill;

