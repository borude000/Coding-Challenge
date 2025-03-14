const express = require("express");
const { Store } = require("../models");
const router = express.Router();

// Get all stores
router.get("/", async (req, res) => {
  const stores = await Store.findAll();
  res.json(stores);
});

// Add new store (Admin only)
router.post("/", async (req, res) => {
  const { name, email, address } = req.body;
  const store = await Store.create({ name, email, address, rating: 0 });
  res.status(201).json(store);
});

module.exports = router;
