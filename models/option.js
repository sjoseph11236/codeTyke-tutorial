'use strict';
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Option.associate = function(models) {
    // associations can be defined here
  };
  return Option;
};