const findSizeControlRef = document.querySelector("input#font-size-control");
const findTextRef = document.querySelector("span#text");
findTextRef.style.fontSize = findSizeControlRef.value + "px";
findSizeControlRef.addEventListener("input", (event) => {
  findTextRef.style.fontSize = event.currentTarget.value + "px";
});
