//require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const User = require("./models/user-model");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use(errorMiddleware);

app.use("/api/auth", router);

connectDb()
  // .then(() => {
  //   seedDatabase();
  // })
  .then(() => {
    const port = 5000;
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });
