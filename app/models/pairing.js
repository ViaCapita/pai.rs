import DS from 'ember-data';

export default DS.Model.extend({
  tags:         DS.hasMany('tag'), 
  description:  DS.attr('description'), 
  requester:    DS.belongsTo('person'),
  responder:    DS.belongsTo('person'),
  organization: DS.belongsTo('organization'), 
  type:         DS.belongsTo('pairingType'),
  status:       DS.belongsTo('pairingStatus'),
  language:     DS.belongsTo('language'),
  requested:    DS.attr('date'), 
  responded:    DS.attr('date') 
});