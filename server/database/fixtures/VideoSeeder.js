const AbstractSeeder = require("./AbstractSeeder");

const userSeeder = require('./UserSeeder')

class VideoSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "video", truncate: true, dependencies: [userSeeder] });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {

      const randomId = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

      // Generate fake user data
      const fakeVideo = {
        title: this.faker.lorem.sentence(),
        description: this.faker.lorem.words(30),
        upload_date: this.faker.date.past(),
        duration: this.faker.lorem.word(2),
        video_url: this.generateFakeVideoURL(),
        preview_url: this.faker.lorem.words(10),
        user_id: randomId(1,10),
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeVideo); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = VideoSeeder;
