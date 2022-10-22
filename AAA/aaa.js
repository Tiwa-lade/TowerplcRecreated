const hamburgerCover = document.querySelector(".hamburger-cover");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const aside = document.querySelector(".aside");
let check = true;





function burger() {
    if (check) {
    ham2.style.display = "none";
    ham1.style.transform = "rotate(-45deg) translate(-10px, 0px)";
    ham3.style.transform = "rotate(45deg) translate(-48px, -40px)";
    aside.style.transform = "translateX(0)";
    check = false;
    }
    else {
        ham2.style.display = "block";
        ham1.style.transform = "none";
        ham3.style.transform = "none";
        aside.style.transform = "translateX(100%)";
        check = true;
    }
}

hamburgerCover.addEventListener("click", burger);