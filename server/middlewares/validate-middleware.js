const validate = (schema) => async (req, res, next) => {
  try {
    //parseAsync compares signup schema with user schema
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next(); // don't forget to call next() on success
  } catch (error) {
    //console.log(error);
    //const message = err.errors[0].message;
    // res.status(400).json({ msg: message }); // corrected "meg" to "msg"
    next(error);
  }
};

module.exports = validate;
