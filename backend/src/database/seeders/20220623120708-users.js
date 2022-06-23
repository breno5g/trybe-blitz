'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'bola8',
        email: 'bola8@gmail.com',
        password: 'vaiRolarLilFarm?'
      },
      {
        username: 'msHairyHeart',
        email: 'msHairyHeart@gmail.com',
        password: 'msHairyHeart'
      },
      {
        username: 'irene',
        email: 'irene@gmail.com',
        password: 'umaSenhoraJovem'
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
