const User = require("../models/user.model");

exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });
    if (isUser.length > 0) {
      res.status(409).send({ message: "This email already exists" });
    }
    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    res
      .status(201)
      .json({ message: "User created successfully!", user, token });
  } catch (err) {
    res.status(400).json({ err: e.err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      res
        .status(401)
        .send({ message: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res
      .status(200)
      .json({ message: "User logged in successfully!", user, token });
  } catch (error) {
    res.status(400).json({ err: e.err });
  }
};

exports.returnUserProfile = async (req, res) => {};
