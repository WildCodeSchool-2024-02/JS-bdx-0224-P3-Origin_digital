const AbstractSeeder = require("./AbstractSeeder");
const userSeeder = require("./UserSeeder");
const categorySeeder = require("./CategorySeeder");

class VideoSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "video",
      truncate: true,
      dependencies: [userSeeder, categorySeeder],
    });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table

    const accesType = ["free", "subscription"];
    const categories = [
      "Fitness",
      "Musculation",
      "Nutrition",
      "Pilates",
      "Yoga",
    ];

    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeVideo = {
        title: this.faker.lorem.sentence(),
        description: this.faker.lorem.words(30),
        upload_date: this.faker.date.past(),
        duration: this.faker.number.int(100),
        video_url: this.faker.image.urlPicsumPhotos(),
        preview_url: this.faker.lorem.words(10),
        access: accesType[Math.round(Math.random())],
        user_id: this.getRef(`user_${Math.floor(Math.random() * (10 - 1) + 1)}`)
          .insertId,
        category_id: this.getRef(
          `category_${categories[Math.floor(Math.random() * (categories.length - 1) + 1)]}`
        ).insertId,
        refName: `video_${i}`,
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeVideo); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = VideoSeeder;
