const AbstractSeeder = require("./AbstractSeeder");
const RoleSeeder = require("./RoleSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true, dependencies: [RoleSeeder] });
  }

  // The run method - Populate the 'user' table with fake data
  async run() {
    // Generate and insert fake data into the 'user' table

    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeUser = {
        email: this.faker.internet.email(), // Generate a fake email using faker library
        password: this.faker.internet.password(), // Generate a fake password using faker library
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        role_id: this.getRef(`Admin`).insertId, // Create a reference name for the user
        refName: `user_${i}`,
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
