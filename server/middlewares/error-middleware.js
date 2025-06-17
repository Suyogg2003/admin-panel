const errorMiddleware = (err, req, res, next) => {
  if (err.name === "ZodError") {
    const errorMessages = err.errors.map((e) => `${e.path[0]}: ${e.message}`);
    return res.status(400).json({
      message: "Validation failed",
      extraDetails: errorMessages,
    });
  }

  // Default error handler
  const status = err.status || 500;
  const message = err.message || "Backend error";
  const extraDetails = err.extraDetails || "Something went wrong";

  res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
