var OpeningExport = DS.Model.extend({
  name: DS.attr('string'),
  opening: DS.belongsTo('opening'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date')
});

export default OpeningExport;