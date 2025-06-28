'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const senhaHash = await bcrypt.hash('senha123', 10);
    return queryInterface.bulkInsert('Users', [{
      nome: 'Pedro Souza',
      login: 'Pedro',
      senha: senhaHash,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', { login: 'pedro' }, {});
  }
};
