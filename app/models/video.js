import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  lead: 		DS.attr('string'),
  url: 			DS.attr('number') 
});