const URL = "https://api.tissini.app/api/v1/";

function getAllCategories() {
  return fetch(`${URL}categories`)
    .then(res => res.json())
    .then(res => res.categories);
}

function getAllSections() {
  return fetch(`${URL}categories/sections`)
    .then(res => res.json())
    .then(res => res.sections);
}

export default {
  getAllCategories,
  getAllSections
};
