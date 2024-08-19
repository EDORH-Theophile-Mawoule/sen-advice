const showPopupBtn1 = document.querySelector(".signin-btn")
const showPopupBtn2 = document.querySelector(".signup-btn")
const formPopup = document.querySelector(".form-popup")
const hidePopupBtn = document.querySelector(".form-popup .close-btn")
const signinSignupLink = document.querySelectorAll(".form-box .bottom-link a")



showPopupBtn1.addEventListener("click", async() =>  {
    let response = await fetch("http://localhost:8080/api/v1/products", { 
        method: "GET",
        mode: 'cors'

    });
      
    let data = await response.text();
    console.log(data)
    document.body.classList.toggle("show-popup");
});
showPopupBtn2.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
hidePopupBtn.addEventListener("click", () => showPopupBtn1.click());

signinSignupLink.forEach(link => {
    link.addEventListener("click", (e)  => {
        e.preventDefault();
        //console.log(link.id)
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    })
})

