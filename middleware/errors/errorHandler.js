const sqlErrors = require("./sqlErrorList");

module.exports = (res, code, error) => {
  res.status(code).json({
    success: false,
    code,
    // Numeric type -> error code; other types -> error message/object
    errorInfo: typeof error === "number" ? sqlErrors[error] : error
  });
};
