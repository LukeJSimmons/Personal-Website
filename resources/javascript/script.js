document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("projectContainer");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");

    const items = container.querySelectorAll(".project");
    for (let i = 4; i < items.length; i++) {
        items[i].style.display = "none";
    }
    showLessBtn.style.display = "none";

    showMoreBtn.addEventListener("click", function() {
        for (let i = 4; i < items.length; i++) {
            items[i].style.display = "inline";
        }
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline";
    })

    showLessBtn.addEventListener("click", function() {
        for (let i = 4; i < items.length; i++) {
            items[i].style.display = "none";
        }
        showMoreBtn.style.display = "inline";
        showLessBtn.style.display = "none";
    })
})

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
