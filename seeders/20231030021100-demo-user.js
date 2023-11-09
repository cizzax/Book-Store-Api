"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nama: "iyus",
        alamat: "Regol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "chandra",
        alamat: "cibeo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "rasen",
        alamat: "mars",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "zaii",
        alamat: "bojes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
