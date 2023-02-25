const countItemsRef = document.querySelector('ul#categories').querySelectorAll('.item').length
console.log("Number of categories: " + countItemsRef)

const allItemsRef = document.querySelector('ul#categories').querySelectorAll('.item')
allItemsRef.forEach((item) => {
    console.log("Category: " + item.querySelector("h2").textContent)
    console.log("Elements: " + item.querySelectorAll('li').length)
})

