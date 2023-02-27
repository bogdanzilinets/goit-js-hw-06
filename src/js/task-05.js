const findInputIdRef = document.querySelector("input#name-input") 
const findSpanNameRef = document.querySelector("span#name-output")

findInputIdRef.addEventListener("input", (event) => {
    if (event.currentTarget.value != '') {
        findSpanNameRef.textContent = event.currentTarget.value 
    } else {
        findSpanNameRef.textContent = 'Anonymous'
    }
})