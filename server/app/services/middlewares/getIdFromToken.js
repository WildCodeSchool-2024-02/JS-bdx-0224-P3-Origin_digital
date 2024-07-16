const jwt = require("jsonwebtoken");

const getIdFromToken = (req, res, next) => {
  try {

    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET,  (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token non valide' });
        }
        const userId = decoded.sub;
        req.body.user_id = userId;
        return userId;
      });

    next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = { getIdFromToken };
