document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll("#nav_icon")

        icons.forEach(function (icon) {
        icon.addEventListener("click", function () {
        this.classList.toggle("open");
        });
    })
})