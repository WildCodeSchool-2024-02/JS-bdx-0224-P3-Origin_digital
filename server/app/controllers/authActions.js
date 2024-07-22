const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const login = async (req, res) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      delete user.password;

      const token = jwt.sign(
        { sub: user.id, isAdmin: user.role_id === 1 },
        process.env.APP_SECRET,
        {
          expiresIn: "24h",
        }
      );

      res.json({ token });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = { login };