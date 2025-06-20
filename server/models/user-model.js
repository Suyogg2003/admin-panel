const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// const testuser = new User({
//   username: "testuser",
//   email: "abc@gmail.com",
//   password: "abc",
// });
// testuser.save();

// json web tocken

const jwt_secretKey = "developersuyog";
// this is secret key we need to add this in the .env file
//when we deploy this add this secret code in .env file
userSchema.methods.genrateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      jwt_secretKey,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
