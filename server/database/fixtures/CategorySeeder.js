const AbstractSeeder = require("./AbstractSeeder");

class CategoriesSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "categories", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data
  run() {
    const categories = [
      { name: "Fitness" },
      { name: "Musculation" },
      { name: "Pilates" },
      { name: "Yoga" },
      { name: "Nutrition" },
    ];

    // Generate and insert fake data into the 'user' table
    categories.forEach((category) => {
      const categoryWithRefName = {
        ...category,
        refName: `category_${category.name}`,
      };
      this.insert(categoryWithRefName); // insert into category(name) values (?)
    });
  }
}

// Export the UserSeeder class
module.exports = CategoriesSeeder;
