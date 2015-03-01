var Faq = DS.Model.extend({
  organization: DS.belongsTo('organization'),
  faqCategory: DS.belongsTo('faqCategory'),
  openings: DS.hasMany('opening'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  relatedFaqs: DS.hasMany('faq')
});
 
Faq.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    title: 'Who is BitTitan?',
    description: 'BitTitan is the leading migration services company in the world providing ...',
    opening: '1',
    organization: '1',
    faqCategory: '1',
    relatedFaqs: ['2'] 
  },
  
  {
    id: '2', 
    title: 'Why should I use Office365?',
    notes: 'O365 is MS newest version of office but made for the cloud...',
    opening: '1',
    organization: '1',
    faqCategory: '2',
    relatedFaqs: ['1']      
  }
  
]});

export default Faq;
