import DS from 'ember-data';

export default DS.Model.extend({
  name:           DS.attr('string'),
  standardLength: DS.attr('number'),
  minimumLength:  DS.attr('number'),
  maximumLength:  DS.attr('number'),
  renewable:      DS.attr('boolean'),
  renewalLength:  DS.attr('number'),
  country:        DS.belongsTo('country', { async: true }),
  type:           DS.belongsTo('work-eligibility-type', { async: true })
});