const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// TEST ROUTE (VERY IMPORTANT)
router.get("/test", (req, res) => {
  res.send("Contacts route working");
});

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new contact
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
