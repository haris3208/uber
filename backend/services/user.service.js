const userModel = require("../models/user.model");

module.exports.createUser = async function ({
  firstname,
  lastname,
  email,
  password,
}) {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  return await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
};
