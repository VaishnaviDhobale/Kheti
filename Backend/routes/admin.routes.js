const express = require("express");
const { addAdmin } = require("../controllers/admin.controllers");

const adminRouter = express.Router(); // create route for admin

// admin routes starts 
adminRouter.route("/addAdmin").post(addAdmin);
// admin routes ends


module.exports = {
    adminRouter
}
