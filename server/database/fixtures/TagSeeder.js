const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class TagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "tag", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const tags = [
      // Nutrition tags
      { name: "Vegan", category_name: "Nutrition" },
      { name: "Protéiné", category_name: "Nutrition" },
      { name: "Gluten free", category_name: "Nutrition" },
      { name: "Bio", category_name: "Nutrition" },
      { name: "Low carb", category_name: "Nutrition" },
      { name: "Keto", category_name: "Nutrition" },
      { name: "Sans sucre", category_name: "Nutrition" },
      { name: "Paleo", category_name: "Nutrition" },
      { name: "Superfood", category_name: "Nutrition" },
      { name: "Rich in fiber", category_name: "Nutrition" },

      // Fitness tags
      { name: "Cardio", category_name: "Fitness" },
      { name: "HIIT", category_name: "Fitness" },
      { name: "Endurance", category_name: "Fitness" },
      { name: "Flexibilité", category_name: "Fitness" },
      { name: "Agilité", category_name: "Fitness" },
      { name: "Strength training", category_name: "Fitness" },
      { name: "Balance", category_name: "Fitness" },
      { name: "Outdoor workout", category_name: "Fitness" },
      { name: "Functional training", category_name: "Fitness" },
      { name: "Recovery", category_name: "Fitness" },

      // Musculation tags
      { name: "Bodybuilding", category_name: "Musculation" },
      { name: "Hypertrophie", category_name: "Musculation" },
      { name: "Powerlifting", category_name: "Musculation" },
      { name: "Strength", category_name: "Musculation" },
      { name: "Split training", category_name: "Musculation" },
      { name: "Full body workout", category_name: "Musculation" },
      { name: "Supersets", category_name: "Musculation" },
      { name: "Deadlift", category_name: "Musculation" },
      { name: "Bench press", category_name: "Musculation" },
      { name: "Squats", category_name: "Musculation" },

      // Yoga tags
      { name: "Hatha", category_name: "Yoga" },
      { name: "Vinyasa", category_name: "Yoga" },
      { name: "Ashtanga", category_name: "Yoga" },
      { name: "Yin Yoga", category_name: "Yoga" },
      { name: "Pranayama", category_name: "Yoga" },
      { name: "Meditation", category_name: "Yoga" },
      { name: "Restorative", category_name: "Yoga" },
      { name: "Bikram", category_name: "Yoga" },
      { name: "Kundalini", category_name: "Yoga" },
      { name: "Yoga Nidra", category_name: "Yoga" },

      // Pilates tags
      { name: "Mat Pilates", category_name: "Pilates" },
      { name: "Reformer Pilates", category_name: "Pilates" },
      { name: "Core strength", category_name: "Pilates" },
      { name: "Flexibility", category_name: "Pilates" },
      { name: "Posture", category_name: "Pilates" },
      { name: "Stability", category_name: "Pilates" },
      { name: "Contrology", category_name: "Pilates" },
      { name: "Breathing techniques", category_name: "Pilates" },
      { name: "Low impact", category_name: "Pilates" },
      { name: "Rehabilitation", category_name: "Pilates" },
    ];

    tags.forEach((tag) => {
      const tagWithRefName = {
        name: tag.name,
        category_id: this.getRef(`category_${tag.category_name}`).insertId,
        refName: `category${tag.name}`,
      };
      this.insert(tagWithRefName);
    });
  }
}

module.exports = TagSeeder;
