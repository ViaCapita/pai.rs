var OpeningType = DS.Model.extend({
  name: DS.attr('string'),
  tanglible: DS.attr('boolean'),
  intangible: DS.attr('boolean'),
  service: DS.attr('boolean'),
  sequence: DS.attr('number')
});

OpeningType.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'Email Service',
    tanglible: false,
    intangible: true,
    service: true,    
    sequence: 1
  },  
  {
    id: '2', 
    name: 'Office Online',
    tanglible: false,
    intangible: true,
    service: true,      
    sequence: 2
  },
  {
    id: '3', 
    name: 'Migration Services',
    tanglible: false,
    intangible: false,
    service: true,      
    sequence: 3
  }
  
]});

export default OpeningType;