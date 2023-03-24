'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    let usuarios = [
      {
        nombre: "Carlos",
        email: "carlos@gmail.com",
        password: "123456"
      },
      {
        nombre: "Pedro",
        email: "pedro@gmail.com",
        password: "123456"
      },
      {
        nombre: "Oscar",
        email: "oscar@gmail.com",
        password: "123456"
      },

    ]

    return queryInterface.bulkInsert('Usuarios', usuarios);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};