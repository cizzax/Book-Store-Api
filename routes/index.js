const router = require("express").Router();
const {
  findAllBooks,
  detailBook,
  tambahBuku,
  hapusbuku,
  memperbaruibuku,
} = require("../controllers/BookController");
const {
  findAllUser,
  memperbaruiUser,
  hapusUser,
  tambahUser,
  detailUser,
} = require("../controllers/UserController");

router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", hapusbuku);
router.put("/book", memperbaruibuku);

router.get("/user", findAllUser);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", hapusUser);
router.put("/user", memperbaruiUser);

module.exports = router;
