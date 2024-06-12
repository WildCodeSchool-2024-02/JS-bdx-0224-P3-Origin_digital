const AbstractSeeder = require("./AbstractSeeder");

const VideoSeeder = require('./VideoSeeder')
const TagSeeder = require('./TagSeeder')

class VideoTagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "video_tag", truncate: true, dependencies: [VideoSeeder, TagSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {

      const randomId = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;


      const fakeVideoTag = {
        video_id: randomId(1,10),
        tag_id: randomId(1,10)
      };

      this.insert(fakeVideoTag);
    }
  }
}

module.exports = VideoTagSeeder;
