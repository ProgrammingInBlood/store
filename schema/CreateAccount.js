import mongoose from "mongoose";
import timestamp from "time-stamp";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  timestamp: String,
});

module.exports =
  mongoose.models.userAccounts || mongoose.model("userAccounts", userSchema);
