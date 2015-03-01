/*
The invitation model is used to invite new users to an organization
 */
export default DS.Model.extend({
  role:                   DS.attr('string'),
  name:                   DS.attr('string'),
  email:                  DS.attr('string'),
  organization:           DS.belongsTo('organization'),
  password:               DS.attr('string'),
  passwordConfirmation:   DS.attr('string')
});
