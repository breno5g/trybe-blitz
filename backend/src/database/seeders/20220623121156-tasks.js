'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Tarefa 1',
          description: 'lorem ipsum dolor sit amet',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Tarefa 1',
          description: 'lorem ipsum dolor sit amet',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Tarefa 2',
          description: 'lorem ipsum dolor sit amet',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Tarefa 3',
          description: 'lorem ipsum dolor sit amet',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Tarefa 4',
          description: 'lorem ipsum dolor sit amet',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
