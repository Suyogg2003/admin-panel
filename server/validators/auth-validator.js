const { z } = require("zod");

//creating an object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "name is requires" })
    .trim()
    .min(3, { message: "name must be atleast of 3 characters" })
    .max(255, { message: "name must not more than 255 characters" }),

  email: z
    .string({ required_error: "email is requires" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast of 3 characters" })
    .max(255, { message: "email must not more than 255 characters" }),

  phone: z
    .string({ required_error: "phone no. is requires" })
    .trim()
    .min(10, { message: "phone no. must be atleast of 10 characters" })
    .max(20, { message: "name must not more than 20 characters" }),

  password: z
    .string({ required_error: "password is requires" })
    .min(7, { message: "password must be atleast of 6 characters" })
    .max(1024, { message: "password must not more than 1024 characters" }),
});

module.exports = signupSchema;
