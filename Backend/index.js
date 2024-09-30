// backend/index.js
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db.js");
const { adminRouter } = require("./routes/admin.routes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/admins",adminRouter)

// Database connection
const startServer = async () => {
  try {
    await connection;
    console.log("Connected with database!!");
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Export the function to start the server
module.exports = { startServer };
