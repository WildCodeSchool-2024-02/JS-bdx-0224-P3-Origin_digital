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
      `WITH DistinctTags AS (
        SELECT tag.id AS tag_id,
               tag.name AS tag_name,
               tag.category_id
        FROM tag
        WHERE tag.category_id = ?
    ),
    TagVideos AS (
        SELECT video.id AS video_id,
               video.title,
               video.img_url,
               video_tag.tag_id
        FROM video
        JOIN video_tag ON video.id = video_tag.video_id
        WHERE video_tag.tag_id IN (SELECT id FROM tag WHERE category_id = ?)
    )
    SELECT ${this.table}.*,
           JSON_ARRAYAGG(
             JSON_OBJECT(
                'id', DistinctTags.tag_id,
                'name', DistinctTags.tag_name,
                'videos', (
                  SELECT JSON_ARRAYAGG(
                           JSON_OBJECT(
                              'id', TagVideos.video_id,
                              'title', TagVideos.title,
                              'image', TagVideos.img_url
                            )
                         )
                  FROM TagVideos
                  WHERE TagVideos.tag_id = DistinctTags.tag_id
                )
              )
           ) AS tags
    FROM ${this.table}
    LEFT JOIN DistinctTags ON ${this.table}.id = DistinctTags.category_id
    WHERE ${this.table}.id = ?
    GROUP BY ${this.table}.id;`,
      [id, id, id]
    );

    return rows[0];
  }
}

module.exports = CategoryRepository;
