const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decodedToken = jwt.verify(token, "secret");
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }
};
