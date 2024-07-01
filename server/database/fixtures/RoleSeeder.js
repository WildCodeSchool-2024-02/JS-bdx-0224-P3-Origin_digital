const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

class RolesSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "roles", truncate: true });
  }

  // The run method - Populate the 'item' table with fake data

  run() {
    const roles = [{ name: "Admin" }, { name: "User" }, { name: "Coach" }];
    // Generate and insert fake data into the 'item' table
    roles.forEach((role) => {
      const roleWithRefName = {
        ...role,
        refName: `${role.name}`,
      };
      this.insert(roleWithRefName); // insert into category(name) values (?)
    });
  }
}

// Export the ItemSeeder class
module.exports = RolesSeeder;
