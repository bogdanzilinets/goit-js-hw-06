const allItemsRef = document.querySelector('ul#categories').querySelectorAll('li.item');
const countItemsRef = allItemsRef.length;

console.log(`Number of categories: ${countItemsRef}`)

allItemsRef.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
})
