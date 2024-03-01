const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  userName: String,
  userNumber: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer",
    },
  },
  userEmail: String,
  location: String,
});

const reports = new Schema({
  reportId: String,
  userId: String,
  waterLevelId: String,
  location: String,
  time: String,
});

const guest = new Schema({
  guestId: String,
  guestEmail: String,
  guestName: String,
  location: String,
});

const User = mongoose.model("User", userSchema);
const Report = mongoose.model("Report", reports);
const Guest = mongoose.model("Guest", guest);

module.exports = { User, Report, Guest };
