const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const jwt_secretKey = "developersuyog"; // after competion put this is on .env file
const authMiddleware = async (req, res, next) => {
  const token = req.header("Autherization"); // this Autherization we pass in postman

  if (!token) {
    // if you try to use expired token yo seee this
    return res
      .status(401)
      .json({ message: "Unautherized HTTP , Token not provided" });
  }

  // assuming token is in format "Bearer <jwtToken", removing the "Baerer" prefix
  const jwtToken = token.replace("Bearer", "").trim();
  console.log("token form auth middleware", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, jwt_secretKey);

    const userData = await User.findOne({ email: isVerified.email });
    Select({ password: 0 });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
  } catch (error) {
    return res.status(401).json({ message: "unauthorized. Invalid token" });
  }
  next();
};

module.exports = authMiddleware;
