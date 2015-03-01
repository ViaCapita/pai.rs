var PaymentType = DS.Model.extend({
  name: DS.attr('string'),
  sequence: DS.attr('number')
});

PaymentType.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'Credit Card',
    sequence: 1
  },  
  {
    id: '2', 
    name: 'Bank Transfer',
    sequence: 2
  }
  
]});

export default PaymentType;