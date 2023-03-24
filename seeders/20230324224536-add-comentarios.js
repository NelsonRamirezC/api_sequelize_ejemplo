'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {

    let comentarios = [
      {
        comentario: "Me gustó mucho el posts 1!",
        usuarioId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comentario: "No me gustó el posts 2",
        usuarioId: 1,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comentario: "Muy bien el posts 1",
        usuarioId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comentario: "Muy bien el el autor del post 2",
        usuarioId: 3,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]

    return queryInterface.bulkInsert('Comentarios', comentarios);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comentarios', null, {});
  }
};
