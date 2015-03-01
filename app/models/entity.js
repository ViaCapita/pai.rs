var Entity = DS.Model.extend({
  type: DS.belongsTo('entityType'),
  fields: DS.hasMany('entityField'),
  candidates: DS.hasMany('candidate')
});

export default Entity;