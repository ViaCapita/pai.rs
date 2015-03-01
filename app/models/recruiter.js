import DS from 'ember-data';
import UserModel from 'pairs/models/user';

export default UserModel.extend({
  title: DS.attr('string'),
  openings: DS.hasMany('opening'),
  roles: DS.hasMany('role'),
  organization: DS.belongsTo('organization')
});