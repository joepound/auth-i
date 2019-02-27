module.exports = (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(401).json({
          success: false,
          code: 401,
          errorInfo: "You shall not pass!"
        });
      } else {
        res
          .status(200)
          .json({ success: true, data: { message: "Logout successful" } });
      }
    });
  } else {
    res
      .status(200)
      .json({ success: true, data: { message: "Already logged out." } });
  }
};
