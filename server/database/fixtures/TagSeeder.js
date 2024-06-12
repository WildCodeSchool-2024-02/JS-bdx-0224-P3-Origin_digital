const AbstractSeeder = require("./AbstractSeeder");

class TagSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "tag", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeTag = {
        name: this.faker.lorem.word()
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeTag); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = TagSeeder;
