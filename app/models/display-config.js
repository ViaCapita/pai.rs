import DS from 'ember-data';

export default  DS.Model.extend({
  person: DS.belongsTo('person'),
  // Education
  schools: DS.attr('boolean'),
  degrees: DS.attr('boolean'),
  subjects: DS.attr('boolean'),
  scholarships: DS.attr('boolean'),
  honors: DS.attr('boolean'),
  education: function(){
    return (this.get('schools') || 
            this.get('degrees') || 
            this.get('subjects') ||   
            this.get('scholarships') ||   
            this.get('honors'));
  }.property('schools', 'degrees', 'subjects', 'scholarships','honors')
});