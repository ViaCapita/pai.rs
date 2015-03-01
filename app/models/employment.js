import DS from "ember-data";

export default DS.Model.extend({
  person: DS.belongsTo('person'),
  company: DS.belongsTo('company'),
  description: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date')
});