let prevScrollPos = window.scrollY;

window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const header = document.querySelector('header');

    if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    } else {
        header.style.top = '-80px';
    }

    prevScrollPos = currentScrollPos;
}

const navBtn = document.getElementById("navBtn");
const navScreen = document.getElementById("navScreen");

navBtn.addEventListener("click", function() {
    var displayValue = window.getComputedStyle(navScreen).getPropertyValue("display");
    navScreen.style.display = (displayValue === "none") ? "flex" : "none";
})
