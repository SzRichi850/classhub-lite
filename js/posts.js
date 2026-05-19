const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

    let liked = false;

    button.addEventListener("click", () => {

        liked = !liked;

        if (liked) {
            button.textContent = "💖 Liked";
        } else {
            button.textContent = "❤️ Like";
        }

    });

});