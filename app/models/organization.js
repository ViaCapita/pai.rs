var Organization = DS.Model.extend({
  name: DS.attr('string'),
  openings: DS.hasMany('opening'),
  candidates: DS.hasMany('candidate'),
  users: DS.hasMany('user'),
  account: DS.belongsTo('account')
});
 
// probably should be mixed-in...
Organization.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'Bit Titan Sales Co', 
    openings: ['1','2'], 
    candidates: ['1','2'], 
    users: ['1','2'], 
    account: '1'
  },
  
  {
    id: '2', 
    name: 'Emarketing Advert Co', 
    openings: ['3','4'], 
    candidates: ['3','4'], 
    users: ['3','4'], 
    account: '2'
  }
  
]});

export default Organization;