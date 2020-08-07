const URL = "https://api.tissini.app/api/v1/";
const URL_V2 = "https://api.tissini.app/api/v2/";

function getAllCategories() {
  return fetch(`${URL}categories`)
    .then(res => res.json())
    .then(res => res.categories);
}

function getAllSections() {
  return fetch(`${URL}categories/sections`).then(res => res.json());
}

function getCategoriesIdProducts(id) {
  return fetch(`${URL_V2}categories/${id}/products`)
    .then(res => res.json())
    .then(res => res.products);
}

export default {
  getAllCategories,
  getAllSections,
  getCategoriesIdProducts
};
