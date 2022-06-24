'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'bola8',
          email: 'bola8@gmail.com',
          // password: 'vaiRolarLilFarm?'
          password:
            '$2b$10$TqCPJYcoADrB2QJGHbVJ2OkzIS2klUnGc1a6vmkLESI9K7PVg.wf.',
        },
        {
          username: 'msHairyHeart',
          email: 'msHairyHeart@gmail.com',
          // password: 'msHairyHeart',
          password:
            '$2b$10$lmLzdoBNZ6qeWgBSN1Q/SuGMr9zESfvjAVasBm6dqksjyraApoLje',
        },
        {
          username: 'irene',
          email: 'irene@gmail.com',
          // password: 'umaSenhoraJovem',
          password:
            '$2b$10$QMlUJI2w1.sI1wHJR1Eu0e8FJrWt5vJZ.ILRWZS3mYatgl2Wlk19i',
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
