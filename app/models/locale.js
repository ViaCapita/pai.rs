import DS from 'ember-data';

var Locale = DS.Model.extend({ 
  name: DS.attr('string'), 
  culture: DS.attr('string'), 
  officialLocale: DS.attr('string'), 
  currencyname: DS.attr('string'), 
  currencySymbol: DS.attr('string'), 
  currencyCode: DS.attr('string'), 
  languagename: DS.attr('string'), 
  languageCode: DS.attr('string'), 
  countryname: DS.attr('string'), 
  countryCode: DS.attr('string'), 
  isoCode: DS.attr('string')	
});

export default Locale;