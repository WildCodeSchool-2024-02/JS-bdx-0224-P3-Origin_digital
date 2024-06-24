const CategoriesRepository = require("./models/categoriesRepository");

const tables = {};

tables.categories = new CategoriesRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
