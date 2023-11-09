"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        judul: "Sherlock, Lupin dan Aku 7: Teka-Teki Kobran",
        penerbit: "Bhuana Ilmu Populer",
        deskripsi:
          "Sherlock adalah tokoh detektif fiktif yang sangat terkenal dan cerdas dalam menyelesaikan masalah. Sherlock juga rupanya memiliki sisi manusiawi yang romantis. Sherlock, dr. Watson yang seorang pesulap licik Arsene Lupin dan Irene Adler, mereka bertiga adalah sahabat yang lantas sama-sama memecahkan kasus rumit yang kerap hadir di sekitar mereka. Buku anak yang luar biasa, tentang sahabat sejati. Tiga otak cemerlang yang mengungkap kisah kejahatan.",
        gambar: "Lupin.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
