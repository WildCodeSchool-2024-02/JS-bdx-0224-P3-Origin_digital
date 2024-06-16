const AbstractRepository = require("./AbstractRepository");

class CategoriesRepository extends AbstractRepository {
  constructor() {
    super({ table: "categories" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = CategoriesRepository;
