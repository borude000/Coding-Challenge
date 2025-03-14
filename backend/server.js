const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 


const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes); 


app.get("/", (req, res) => {
  res.send("Store Rating API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
