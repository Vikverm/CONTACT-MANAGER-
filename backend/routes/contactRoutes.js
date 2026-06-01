const express =
  require("express");

const router =
  express.Router();

const protect =
  require("../middleware/authMiddleware");

const {
  addContact,
  getContacts,
  deleteContact,
  toggleFavorite,
  updateContact,
  getStats,
} = require(
  "../controllers/contactController"
);

router.put(
  "/favorite/:id",
  protect,
  toggleFavorite
);

router.get(
  "/stats",
  protect,
  getStats
);

router.put(
  "/:id",
  protect,
  updateContact
);

router.post(
  "/",
  protect,
  addContact
);

router.get(
  "/",
  protect,
  getContacts
);

router.delete(
  "/:id",
  protect,
  deleteContact
);

module.exports =
  router;