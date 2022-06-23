'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    static associate(_models) {}
  }
  task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'task',
    timestamps: false,
    underscored: true
  });
  return task;
};