const user = require("../models/user");
exports.Adduser = async (req, res) => {
  try {
    const newuser = new user(req.body);
    await newuser.save();
    res.status(200).send({ msg: "user added", newuser });
  } catch (error) {
    res.status(500).send("couldn't add user");
  }
};
exports.Getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "list of users", users });
  } catch (error) {
    res.status(500).send("couldn't get users");
  }
};
exports.Deleteuser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(500).send("user was not deleted");
  }
};
exports.Edituser = async (req, res) => {
  try {
    const edituser = await user.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "user updated", edituser });
  } catch (error) {
    res.status(500).send("couldn't update user");
  }
};
