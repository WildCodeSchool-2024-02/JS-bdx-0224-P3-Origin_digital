export default async function categoryFetch(id) {
  return fetch(`http://localhost:3310/api/category/${id}`);
}
