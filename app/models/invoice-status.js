var InvoiceStatus = DS.Model.extend({
  name: DS.attr('string'),
  style: DS.attr('number'),
  sequence: DS.attr('number')
});
 
// probably should be mixed-in...
InvoiceStatus.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    name: 'Issued', 
    style: "info", 
    sequence: 1 
  },
  {
    id: '2', 
    name: 'Paid', 
    style: "success", 
    sequence: 2 
  },
  {
    id: '3', 
    name: 'Rejected', 
    style: "danger", 
    sequence: 3 
  }
  
]});

export default InvoiceStatus;