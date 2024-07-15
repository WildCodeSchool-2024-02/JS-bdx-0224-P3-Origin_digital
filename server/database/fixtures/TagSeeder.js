const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class TagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "tag", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const categories = [
      "Fitness",
      "Musculation",
      "Nutrition",
      "Pilates",
      "Yoga",
    ];

    for (let i = 0; i < 10; i += 1) {
      const fakeTag = {
        name: this.faker.lorem.word(),
        category_id: this.getRef(
          `category_${categories[Math.floor(Math.random() * (categories.length - 1) + 1)]}`
        ).insertId,
        refName: `tag_${i}`,
      };

      this.insert(fakeTag);
    }
  }
}

module.exports = TagSeeder;
