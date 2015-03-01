var Invoice = DS.Model.extend({
  summary: DS.attr('string'),
  amount: DS.attr('number'),
  invoiceNumber: DS.attr('number'),
  purchaseOrder: DS.attr('string'),
  issuedAt: DS.attr('date'),
  createdAt: DS.attr('date'),
  paidAt: DS.attr('date'),
  paymentType: DS.belongsTo('payment-type'),
  creditBlock: DS.belongsTo('credit-block'),
  status: DS.belongsTo('invoice-status'),
  organization: DS.belongsTo('organization')
});
 
Invoice.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    summary: 'Automatic Credit Replenishment', 
    purchaseOrder: "XYZ 1234 x", 
    amount: 204224, 
    invoiceNumber: 1001, 
    issuedAt: "2014-01-01", 
    createdAt: "2014-01-01", 
    paidAt: "2014-02-02", 
    paymentType: '1',
    creditBlock: '1', 
    status: '2', 
    organization: '1'
  },
  {
    id: '2', 
    summary: 'Automatic Credit Replenishment', 
    purchaseOrder: "XYZ 1234 x", 
    amount: 204224, 
    invoiceNumber: 1001, 
    issuedAt: "2014-01-01", 
    createdAt: "2014-01-01", 
    paidAt: "2014-02-02", 
    paymentType: '1',
    creditBlock: '1', 
    status: '2', 
    organization: '1'
  },
  {
    id: '3', 
    summary: 'Automatic Credit Replenishment', 
    purchaseOrder: "XYZ 1234 x", 
    amount: 204224, 
    invoiceNumber: 1001, 
    issuedAt: "2014-01-01", 
    createdAt: "2014-01-01", 
    paidAt: "2014-02-02", 
    paymentType: '2',
    creditBlock: '2', 
    status: '2', 
    organization: '1'
  },
  {
    id: '4', 
    summary: 'Automatic Credit Replenishment', 
    purchaseOrder: "XYZ 1234 x", 
    amount: 204224, 
    invoiceNumber: 1001, 
    issuedAt: "2014-01-01", 
    createdAt: "2014-01-01", 
    paidAt: "2014-02-02", 
    paymentType: '1',
    creditBlock: '3', 
    status: '2', 
    organization: '1'
  },
  {
    id: '5', 
    summary: 'Credit Prepurchase', 
    amount: 600001, 
    purchaseOrder: "XYZ 1234 x", 
    invoiceNumber: 1001, 
    issuedAt: "2014-01-01", 
    createdAt: "2014-01-01", 
    paidAt: "2014-02-02", 
    paymentType: '1',
    creditBlock: '4', 
    status: '2', 
    organization: '1'
  }  
]});

export default Invoice;