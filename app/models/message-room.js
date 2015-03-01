import DS from 'ember-data';

export default DS.Model.extend({ 
  name:     DS.attr('string'), 
  messages: DS.hasmany('message', { async: true }), 
  people:   DS.hasmany('person', { async: true }) 
});