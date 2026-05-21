const posts = [
    { title: "Osztálykirándulás", content: "Pénteken indulunk 8:00-kor." },
    { title: "Matek doga", content: "Ne felejtsétek el a holnapi dolgozatot." }
];

const postsSection = document.querySelector(".posts");

posts.forEach((post, index) => {
    
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    
    postDiv.innerHTML = `
        <h3 class="title">${post.title}</h3>
        <p class="content">${post.content}</p>
        <button class="like-btn">❤️ Like</button>
        <p class="like">0</p>
    `;

   
    postsSection.appendChild(postDiv);

   
    const likeBtn = postDiv.querySelector(".like-btn");
    const likeCounter = postDiv.querySelector(".like");
    let liked = false;
    let like_count = 0;

    likeBtn.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            likeBtn.textContent = "💖 Liked";
            like_count += 1;
        } else {
            likeBtn.textContent = "❤️ Like";
            like_count -= 1;
        }

        likeCounter.innerHTML = like_count;
        console.log(like_count);
    });
});