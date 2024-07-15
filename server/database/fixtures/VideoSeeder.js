const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");
const CategorySeeder = require("./CategorySeeder");

class VideoSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "video",
      truncate: true,
      dependencies: [UserSeeder, CategorySeeder],
    });
  }

  run() {
    const videos = [
      {
        title: "titre1",
        description: "Ceci est une descirption de la video 1.",
        upload_date: "15/07/2024",
        duration: 15,
        video_url: "server/public/assets/videos/test1.mp4",
        img_url: "server/public/assets/thumbnails/thumbnail1.jpg",
        access: "free",
        user_id: 1,
        category_id: 1,
      },
      {
        title: "titre2",
        description: "Ceci est une descirption de la video 2.",
        upload_date: "14/07/2024",
        duration: 20,
        video_url: "server/public/assets/videos/test2.mp4",
        img_url: "server/public/assets/thumbnails/thumbnail2.jpg",
        access: "subscription",
        user_id: 2,
        category_id: 2,
      },
      {
        title: "titre3",
        description: "Ceci est une descirption de la video 3.",
        upload_date: "13/07/2024",
        duration: 25,
        video_url: "server/public/assets/videos/test3.mp4",
        img_url: "server/public/assets/thumbnails/thumbnail3.jpg",
        access: "free",
        user_id: 3,
        category_id: 2,
      },
    ];
    videos.forEach((video) => {
      const videoWithRefName = {
        ...video,
        refName: `${video.title}`,
      };
      this.insert(videoWithRefName);
    });
  }
}

module.exports = VideoSeeder;
