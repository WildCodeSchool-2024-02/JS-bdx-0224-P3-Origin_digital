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
      `SELECT DISTINCT ${this.table}.*, 
       JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', tag.id,
            'name', tag.name,
            'videos', (
              SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', video.id,
                  'name', video.title,
                  'image', video.img_url
                )
              )
              FROM video
              LEFT JOIN video_tag ON video.id = video_tag.video_id
              WHERE video_tag.tag_id = tag.id
            )
          )
        ) AS tags
      FROM category
      RIGHT JOIN tag ON tag.category_id = ${this.table}.id
      RIGHT JOIN video_tag ON video_tag.tag_id = tag.id
      RIGHT JOIN video ON video.id = video_tag.video_id
      WHERE ${this.table}.id = ?
      GROUP BY ${this.table}.id`,
      [id]
    );

    return rows[0];
  }
}

module.exports = CategoryRepository;

// const AbstractRepository = require("./AbstractRepository");

// class CategoryRepository extends AbstractRepository {
//   constructor() {
//     super({ table: "category" });
//   }

//   async readAll() {
//     const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
//     return rows;
//   }

//   async read(id) {
//     const [rows] = await this.database.query(
//       `SELECT ${this.table}.*, JSON_ARRAYAGG(
//         JSON_OBJECT(
//           "id", tag.id,
//           "title", tag.name
//         )
//       ) as tags FROM ${this.table} LEFT JOIN tag ON tag.category_id=${this.table}.id
//       WHERE ${this.table}.id = ? GROUP BY category.id`,
//       [id]
//     );

//     return rows[0];
//   }
// }

// module.exports = CategoryRepository;
