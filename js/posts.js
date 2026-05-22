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


// Fake comment sytem
const commentsContainer = document.getElementById("comments");

    function addComment() {
      const message = document.getElementById("message").value.trim();

      if(message === ""){
        alert("Tölts ki minden mezőt!");
        return;
      }

      const comment = document.createElement("div");
      comment.classList.add("comment");

      const now = new Date();
      const time =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

      comment.innerHTML = `
        <button class="delete-btn">Törlés</button>
        <p>${message}</p>
        <div class="time">${time}</div>
      `;

      comment.querySelector(".delete-btn").addEventListener("click", () => {
        comment.remove();
      });

      commentsContainer.prepend(comment);

      document.getElementById("name").value = "";
      document.getElementById("message").value = "";

    }

      commentsContainer.appendChild(comment);