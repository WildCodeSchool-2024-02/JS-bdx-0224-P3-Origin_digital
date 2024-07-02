const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async create(user) {
    const { email, password, firstname, lastname, roleId, siret } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password, firstname, lastname, role_id, siret) VALUES (?,?,?,?,?,?)`,
      [email, password, firstname, lastname, roleId, siret]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = UserRepository;
