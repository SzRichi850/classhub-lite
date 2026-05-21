const posts = [
    { title: "Osztálykirándulás", content: "Pénteken indulunk 8:00-kor.", like: 0 },
    { title: "Cooking recipe ", content: "izraeli steak", like: 0 },
    { title: "vodafone", content: "GYERE A VODAFONHOZZZZZZ", like: 0 },
    { title: "telefon", content: "JKSDAFBKAEDSHGFUHELD.", like: 0 },
    { title: "pedomaci", content: "eljon erted", like: 0 },
    { title: "spongyabob", content: "NEM HALLOMMMMM!", like: 0  }
];

localStorage.setItem("posts", JSON.stringify(posts))

let posztok = JSON.parse(localStorage.getItem("posts"))
console.log(posztok)

const postsSection = document.querySelector(".posts");

posztok.forEach((post, index) => {
    
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
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
        localStorage.setItem(post);

        likeCounter.innerHTML = like_count;
        console.log(like_count);
    });
});

/*JSON.stringify(localStorage.setItem("elso", [1, 2, 3, 4, 5, 6, 7, 78, 8, 10]))
console.log(JSON.parse(localStorage.getItem("elso")))*/
