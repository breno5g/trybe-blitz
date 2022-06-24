'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          title: 'Jogar lil farm',
          description: 'Encher o saco até ir jogar',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Jogar lil farm',
          description: 'Encher o saco até ir jogar',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Jogar lil farm',
          description: 'Encher o saco até ir jogar',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Jogar lil farm',
          description: 'Encher o saco até ir jogar',
          user_id: 1,
          status: 'pending',
          created_at: new Date(),
        },
        {
          title: 'Fiquei sem ideia',
          description: 'aqui também',
          user_id: 2,
          status: 'in progress',
          created_at: new Date(),
        },
        {
          title: 'Fiquei sem ideia',
          description: 'aqui também',
          user_id: 3,
          status: 'done',
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
