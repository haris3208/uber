const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected To DB Successfully");
    })
    .catch(() => {
      console.log("Failed to connect To Database");
    });
}

module.exports = connectToDb;
