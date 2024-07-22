const AbstractRepository = require("./AbstractRepository");

class VideoRepository extends AbstractRepository {
  constructor() {
    super({ table: "video" });
  }

  async readAll(userId) {
    const [rows] = await this.database.query(
      `SELECT 
        video.id AS video_id,
        video.title,
        video.description,
        video.upload_date,
        video.duration,
        video.video_url,
        video.img_url,
        video.access,
        category.name AS category_name,
        GROUP_CONCAT(tag.name SEPARATOR ', ') AS tags
      FROM 
        video_tag
      JOIN 
        video ON video_tag.video_id = video.id
      JOIN 
        tag ON video_tag.tag_id = tag.id
      JOIN 
        category ON video.category_id = category.id
      WHERE 
        video.user_id = ?
      GROUP BY 
        video.id;`,
      [userId]
    );
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT 
        video.id AS video_id,
        video.title,
        video.description,
        video.upload_date,
        video.duration,
        video.video_url,
        video.img_url,
        video.access,
        category.name AS category_name,
        GROUP_CONCAT(tag.name SEPARATOR ', ') AS tags
      FROM 
        video
      LEFT JOIN 
        video_tag ON video.id = video_tag.video_id
      LEFT JOIN 
        tag ON video_tag.tag_id = tag.id
      LEFT JOIN 
        category ON video.category_id = category.id
      WHERE 
        video.id = ?
      GROUP BY 
        video.id;`,
      [id]
    );

    return rows[0];
  }

  async update(video) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title=?, description=?, upload_date=?, duration=?, video_url=?, img_url=?, category_id=?, user_id=? WHERE id=?`,
      [
        video.title,
        video.description,
        video.upload_date,
        video.duration,
        video.video_url,
        video.img_url,
        video.category_id,
        video.user_id,
        video.id,
      ]
    );

    return result.affectedRows;
  }

  async create(video) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, description, upload_date, duration, video_url, img_url, category_id, user_id) VALUES (?,?,?,?,?,?,?,?)`,
      [
        video.title,
        video.description,
        video.upload_date,
        video.duration,
        video.video_url,
        video.img_url,
        video.category_id,
        video.user_id,
      ]
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

module.exports = VideoRepository;
