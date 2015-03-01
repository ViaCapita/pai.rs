var Question = DS.Model.extend({
  questionText: DS.attr('string'),
  organization: DS.belongsTo('organization'),
  dialogs: DS.hasMany('dialog'),
  answers: DS.hasMany('answer')
});
 
Question.reopenClass({
  FIXTURES: [
  {
    id: '1', 
    questionText: 'What comes after four?',
    answers: ['1', '2', '3']
  },
  
  {
    id: '2', 
    questionText: 'What comes after 12?',
    question: '1',
    sequence: '1'
  }
  
]});

export default Question;