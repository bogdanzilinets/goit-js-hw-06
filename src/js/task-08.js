const findLoginFormRef = document.querySelector("form.login-form")
const findEmailRef = document.querySelector("[name='email']")
const findPasswordRef = document.querySelector("[name='password']")

findLoginFormRef.addEventListener("submit", (event) => {
    event.preventDefault()
    if (findEmailRef.value == "" || findPasswordRef.value == "") {
        alert("All fields must not empty!")
    } else {
        let data = { 
            "email": findLoginFormRef.elements.email,
            "password": findLoginFormRef.elements.password
        }
        console.log(data)
        findLoginFormRef.reset() 
    }
})


