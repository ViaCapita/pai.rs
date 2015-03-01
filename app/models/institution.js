import Entity from 'pairs/models/entity';

export default Entity.extend({
  name: 	  DS.attr('string'),
  employees:  DS.hasMany('person'),
  facilities: DS.hasMany('location')
});