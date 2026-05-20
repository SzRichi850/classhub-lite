const likeButtons = document.querySelectorAll(".like-btn");

const like = document.getElementById(like);
let like_count = 0;



likeButtons.forEach(button => {

    let liked = false;

    button.addEventListener("click", () => {

        liked = !liked;

        if (liked) {
            button.textContent = "💖 Liked";
            like_count += 1; 
            like.innerHTML = like_count
        } 
        else {
            button.textContent = "❤️ Like";
            like_count -= 1;
        }

    });

});