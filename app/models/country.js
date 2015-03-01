import TypeModel from 'pairs/models/type-model';

export default TypeModel.extend({
  countryLanguages:       DS.belongsTo('language'),
  percentFirst:   DS.attr('number'),
  percentSecond:  DS.attr('number'),
  countryCode:   DS.attr('number')
});

