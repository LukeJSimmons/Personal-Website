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
