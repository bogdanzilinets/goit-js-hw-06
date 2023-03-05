const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
let listLi = [];

ingredients.forEach((item) => {
  const addLiRef = document.createElement("li");

  addLiRef.textContent = item;
  addLiRef.className = "item";
  listLi.push(addLiRef);
});

document.querySelector("ul#ingredients").append(...listLi);
