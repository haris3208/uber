const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");
const userModel = require("../models/user.model");
const authMiddleware = require("../middlewares/auth.middleware");
const blacklistTokenModel = require("../models/blacklistToken.model");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, lastname, email, password } = req.body;

    const isUser = await userModel.findOne({ email });
    if (isUser) {
      return res.status(400).json({ message: "email already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    console.log(user);
    const token = user.generateAuthToken();
    return res.status(200).json({ token, user });
  },
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async function (req, res, next) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token);
    return res.status(200).json({ token, user });
  },
);

router.get("/profile", authMiddleware.authUser, function (req, res, next) {
  return res.status(200).json(req.user);
});

router.get("/logout", authMiddleware.authUser, async function (req, res) {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({ token });

  return res.status(200).json({ message: "Logged Out Successfully" });
});
module.exports = router;
