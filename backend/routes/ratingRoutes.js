const express = require("express");
const { Rating, Store } = require("../models");
const router = express.Router();

// Submit rating
router.post("/", async (req, res) => {
  const { userId, storeId, ratingValue } = req.body;
  
  await Rating.create({ userId, storeId, ratingValue });

  // Calculate new average rating
  const ratings = await Rating.findAll({ where: { storeId } });
  const avgRating = ratings.reduce((acc, r) => acc + r.ratingValue, 0) / ratings.length;

  await Store.update({ rating: avgRating }, { where: { id: storeId } });

  res.json({ message: "Rating submitted successfully", avgRating });
});

module.exports = router;

