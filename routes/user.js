const express = require("express");
const {
  Adduser,
  Getusers,
  Deleteuser,
  Edituser,
} = require("../controlles/user");
const user = require("../models/user");
const userRoute = express.Router();

userRoute.post("/add", Adduser);
userRoute.get("/all", Getusers);
userRoute.delete("/delete/:id", Deleteuser);
userRoute.put("/edit/:id", Edituser);
module.exports = userRoute;
