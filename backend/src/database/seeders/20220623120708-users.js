'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'teste',
          email: 'teste@gmail.com',
          // password: 'vaiRolarLilFarm?'
          password:
            '$2b$10$TqCPJYcoADrB2QJGHbVJ2OkzIS2klUnGc1a6vmkLESI9K7PVg.wf.',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
