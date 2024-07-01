const categoryFetch = (id) => {
  fetch(`http://localhost:3310/api/category/${id}`);
};

module.exports = { categoryFetch };
