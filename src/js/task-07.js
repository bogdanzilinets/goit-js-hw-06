const findSizeControlRef = document.querySelector("input#font-size-control")
const findTextRef = document.querySelector("span#text")
findSizeControlRef.addEventListener("input", (event) => {
    findTextRef.style.fontSize = event.currentTarget.value + 'px' 
})