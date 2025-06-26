const express = require("express");
const router = express.Router();
//const { home } = require("../controllers/auth-controller");
// this we can write as
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/authMiddleware");
// router.get("/", (req, res) => {
//   res.status(200).send("Hello World!");

router.route("/").get(authcontrollers.home);
//validate is a middleware
router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register);

router.route("/login").post(authcontrollers.login);

// working on user route where we get user data
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
