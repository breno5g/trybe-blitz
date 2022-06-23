'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(_models) {}
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.STRING,
    status: DataTypes.STRING,
    createdAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
    timestamps: false,
    underscored: true
  });
  return Task;
};