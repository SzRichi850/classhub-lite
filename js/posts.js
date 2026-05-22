const posts = [
    { title: "Osztálykirándulás", content: "Pénteken indulunk 8:00-kor.", like: 0 },
    { title: "Cooking recipe ", content: "izraeli steak", like: 0 },
    { title: "vodafone", content: "GYERE A VODAFONHOZZZZZZ", like: 0 },
    { title: "telefon", content: "JKSDAFBKAEDSHGFUHELD.", like: 0 },
    { title: "pedomaci", content: "eljon erted", like: 0 },
    { title: "spongyabob", content: "NEM HALLOMMMMM!", like: 0 }
];




let latta = JSON.parse(localStorage.getItem("seen"))
if(!latta) {
    localStorage.setItem("seen", JSON.stringify(true));
    localStorage.setItem("posts", JSON.stringify(posts))
}

let posztok = JSON.parse(localStorage.getItem("posts"));

const postsSection = document.querySelector(".posts");

posztok.forEach((post, index) => {

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    postDiv.innerHTML = `
        <h3 class="title">${post.title}</h3>
        <p class="content">${post.content}</p>
        <button class="like-btn">❤️ Like</button>
        <p class="like">${post.like}</p>
    `;

    postsSection.appendChild(postDiv);

    const likeBtn = postDiv.querySelector(".like-btn");
    const likeCounter = postDiv.querySelector(".like");
    let liked = false;
    let like_count = posztok[index].like;

    likeBtn.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            likeBtn.textContent = "💖 Liked";
            like_count += 1;
        } else {
            likeBtn.textContent = "❤️ Like";
            like_count -= 1;
        }

        posztok[index].like = like_count;
        localStorage.setItem("posts", JSON.stringify(posztok));        
        likeCounter.innerHTML = like_count;
        console.log(posztok)
    });

});

for (let i = 0, len = localStorage.length; i < len; ++i) {
    var element = document.createElement("p")
    element.textContent = localStorage.getItem(localStorage.key(i))
    const output = document.getElementById("like");
   
}
