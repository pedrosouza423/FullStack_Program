'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Laranja',
        quantidade: 500
      },
      {
        nome: 'Banana',
        quantidade: 1000
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Produtos', null, {});
  }
};
