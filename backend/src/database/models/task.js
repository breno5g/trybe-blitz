'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      models.task.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'task',
      timestamps: false,
      underscored: true,
    }
  );
  return Task;
};
