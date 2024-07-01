const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
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

  async update(category) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name=? WHERE id=?`,
      [category.name, category.id]
    );

    return result.affectedRows;
  }

  async create(category) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [category.name]
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

module.exports = CategoryRepository;
