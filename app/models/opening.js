var Opening = DS.Model.extend({
  name: DS.attr('string'), // public String OpeningName
  candidates: DS.hasMany('candidate'),
  users: DS.hasMany('user'),
  faqs: DS.hasMany('faq'),
  calls: DS.hasMany('call'),
  organization: DS.belongsTo('organization'), // public Guid OrganizationId
  dialog: DS.belongsTo('dialog'),
  type: DS.belongsTo('openingType'),
  status: DS.belongsTo('openingStatus'),
  owner: DS.belongsTo('user'), // public Guid OwnerSystemUserId
  created: DS.attr('string'), // public DateTime Created
  updated: DS.attr('string') // public DateTime Updated 
});
      
// UNKNOWN FROM BurgerMaster DB  
// public OpeningState OpeningState
// public Guid DataSetId


Opening.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'Email Migration Opening', 
    candidates: ['1','2'], 
    users: ['1','2','3'], 
    faqs: ['1','2','3'], 
    calls: ['1','2'], 
    organization: '1', 
    dialog: '3', 
    type: '1', 
    status: '1'
  },
  {
    id: '2', 
    name: 'Document Migration Opening', 
    candidates: ['1','2'], 
    users: ['1','2','3'], 
    faqs: ['1','2','3'], 
    calls: [], 
    organization: '1', 
    dialog: '1', 
    type: '2', 
    status: '1'
  },
  {
    id: '3', 
    name: 'SaaS Marketing Opening', 
    candidates: ['3','4'], 
    users: ['3','4'], 
    faqs: ['1','2','3'], 
    calls: [], 
    organization: '2', 
    dialog: '2', 
    type: '2', 
    status: '2'
  },
  {
    id: '4', 
    name: 'PaaS Advertising Opening', 
    candidates: ['3','4'], 
    users: ['3','4'], 
    faqs: ['1','2'], 
    calls: [], 
    organization: '2', 
    dialog: '3', 
    type: '3', 
    status: '3'
  }
  
  
]});

export default Opening;





