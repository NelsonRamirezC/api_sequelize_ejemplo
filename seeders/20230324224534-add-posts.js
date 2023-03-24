'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    let posts = [
      {
        titulo: "Post 1",
        contenido: "Contenido del post 1",
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Post 2",
        contenido: "Contenido del post 2",
        usuarioId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Post 3",
        contenido: "Contenido del post 3",
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Post 4",
        contenido: "Contenido del post 4",
        usuarioId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ]

    return queryInterface.bulkInsert('Posts', posts);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};