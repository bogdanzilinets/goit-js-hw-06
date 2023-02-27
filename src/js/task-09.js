function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const findBodyRef = document.querySelector('body')
const findButtonRef = document.querySelector("button.change-color")
const findSpanRef = document.querySelector("span.color")

findButtonRef.addEventListener("click", () => {
  findBodyRef.style.backgroundColor = getRandomHexColor()
  findSpanRef.textContent = getRandomHexColor()
})
  
