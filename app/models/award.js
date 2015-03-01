import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  summary: 	 	DS.attr('string'), 
  imageUrl:  	DS.attr('string'), 
  startedAt: 	DS.attr('date'),
  endedAt: 	 	DS.attr('date'),
  awardedAt: 	DS.attr('date')
});