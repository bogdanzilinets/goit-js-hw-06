const findInputRef = document.querySelector("input#validation-input")
findInputRef.addEventListener("blur", () => {
    if (findInputRef.getAttribute('data-length') == findInputRef.value.length) {
        findInputRef.className = 'valid'
        } else {
        findInputRef.className = 'invalid'
        }
    })
