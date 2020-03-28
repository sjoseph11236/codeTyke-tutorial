'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    body: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsToMany(models.Option, {
      through: 'QuestionOption', 
      as:'options', 
      foreignKey: 'questionId',
      otherkey:'optionId'
    })
  };
  return Question;
};