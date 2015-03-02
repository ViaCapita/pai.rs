import DS from 'ember-data';
import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  cEFRLevel: DS.attr('string'), 
  cEFRSubLevel: DS.attr('string'), 
  cEFRCode: DS.attr('string')	
});