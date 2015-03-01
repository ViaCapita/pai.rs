import DS from 'ember-data';

export default DS.Model.extend({
  country:        DS.belongsTo('country'),
  language:       DS.belongsTo('language'),
  percentFirst:   DS.attr('number'),
  percentSecond:  DS.attr('number'),
  percentThird:   DS.attr('number'),
  official:       DS.attr('boolean')
});

