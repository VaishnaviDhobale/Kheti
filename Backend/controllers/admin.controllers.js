const { AdminModel } = require("../models/admin.models");

const addAdmin = async (req, res) => {
    try {
      const { name } = req.body;
      console.log("Request body:", req.body); // Check if the request body is being received
  
      const admin = new AdminModel({ name });
  
      if (admin) {
        await admin.save();
        res.status(200).send({ success: "Admin Successfully Added!" });
      } else {
        res.status(400).send({ error: "Failed to save admin." });
      }
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).send({ error: "Server Error", details: error.message });
    }
  };

  
  module.exports = {
    addAdmin
  }