const captainModel = require("../models/captain.model");

module.exports.createCaptain = async function ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !capacity ||
    !vehicleType ||
    !plate
  ) {
    throw new Error("All fields are required");
  }

  const captain = captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
