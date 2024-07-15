const AbstractSeeder = require("./AbstractSeeder");
const VideoSeeder = require("./VideoSeeder");
const TagSeeder = require("./TagSeeder");

class VideoTagSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "video_tag",
      truncate: true,
      dependencies: [VideoSeeder, TagSeeder],
    });
  }

  run() {
    for (let i = 0; i < 60; i += 1) {
      const fakeVideoTag = {
        video_id: this.getRef(
          `video_${Math.floor(Math.random() * (10 - 1) + 1)}`
        ).insertId,
        tag_id: this.getRef(`tag_${Math.floor(Math.random() * (10 - 1) + 1)}`)
          .insertId,
      };

      this.insert(fakeVideoTag);
    }
  }
}

module.exports = VideoTagSeeder;
