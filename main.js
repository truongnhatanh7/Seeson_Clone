const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let navbarList = $(".navbar");
let menuBtn = $(".navbar-header .menu-btn");

menuBtn.addEventListener("click", () => {

    if (navbarList.classList.contains("active")) {
        navbarList.classList.remove("active");
        navbarList.classList.add("idle");
    } else  {
        navbarList.classList.remove("idle");
        navbarList.classList.add("active");
    }
})
