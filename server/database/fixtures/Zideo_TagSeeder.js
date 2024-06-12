const AbstractSeeder = require("./AbstractSeeder");

const VideoSeeder = require('./VideoSeeder')
const TagSeeder = require('./TagSeeder')

class VideoTagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "video_tag", truncate: true, dependencies: [VideoSeeder, TagSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeVideoTag = {
        video_id: this.getRef(`video_${i}`).insertId,
        tag_id: this.getRef(`tag_${i}`).insertId
      };

      this.insert(fakeVideoTag);
    }
  }
}

module.exports = VideoTagSeeder;
