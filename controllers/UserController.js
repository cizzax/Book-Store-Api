const { User } = require("../models");
const user = require("../models/user");
const findAllUser = async (req, res) => {
  //ambil data
  const data = await User.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  });
};
const detailUser = async (req, res) => {
  let id = parseInt(req.body.id);
  //ambil data

  const data = await User.findByPk(id);

  res.json({
    message: "ini dari router",
    data: data,
  });
};

const tambahUser = async (req, res) => {
  try {
    const data = req.body;

    const result = await User.create(data);
    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      massage: "Error : " + error,
    });
  }
};

const hapusUser = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      message: "Buku berhasil di hapus",
    });
  } catch (error) {
    res.json({
      message: "Error" + error,
    });
  }
};

const memperbaruiUser = async (req, res) => {
  try {
    const data1 = req.body.id;
    const data2 = req.body.judul;

    await User.update(
      { judul: data2 },
      {
        where: {
          id: data1,
        },
      }
    );
    res.json({
      message: "Berhasil memperbarui",
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

module.exports = {
  findAllUser,
  detailUser,
  tambahUser,
  hapusUser,
  memperbaruiUser,
};
