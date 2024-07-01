const CategoryRepository = require("./models/CategoryRepository");
const RoleRepository = require("./models/RoleRepository");
const TagRepository = require("./models/TagRepository");
const UserRepository = require("./models/UserRepository");
const VideoRepository = require("./models/VideoRepository");

const tables = {};

tables.category = new CategoryRepository();
tables.role = new RoleRepository();
tables.tag = new TagRepository();
tables.user = new UserRepository();
tables.video = new VideoRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
