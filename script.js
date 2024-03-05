let eye = document.querySelector(".eye")
let input = document.querySelector("input")
let img = document.querySelector(".eye img")



function showPassword() {
    if (input.type === "password") {
        input.type = "text";
        img.classList.add("eye-img");
        img.src = "eye-open.png"
        eye.appendChild(img);
    } else {
        input.type = "password";
        img.classList.add("eye-img");
        img.src = "eye-close.png"
        eye.appendChild(img);
    }
}

