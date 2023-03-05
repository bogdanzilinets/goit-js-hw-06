let counterValue = 0

const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const findSpanRef = document.querySelector("span#value")

buttonDecrementRef.addEventListener("click", () => {
    counterValue -= 1;
    findSpanRef.textContent = counterValue;
})

buttonIncrementRef.addEventListener("click", () => {
    counterValue += 1;
    findSpanRef.textContent = counterValue;
})

