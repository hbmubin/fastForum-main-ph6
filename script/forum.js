const loadAllPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  displayPosts(posts);
};

const displayPosts = (posts) => {
  const postCardContainer = document.getElementById("postContainer");
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.classList = `discuss-card w-[780px] bg-slate-100 p-10 rounded-[24px] flex`;
    postCard.innerHTML = `
    <div class="card-image mr-6 relative">
      <img class="w-20 rounded-xl" src="${post.image}" alt="" />
      <div id="dot" 
        class="h-3 w-3 bg-green-500 rounded-full absolute -top-1 -right-1"
      ></div>
    </div>
    <div class="card-content w-full">
      <div class="flex gap-4 inter font-medium text-slate-600">
        <p>#${post.category}</p>
        <p>Author: ${post.author.name}</p>
      </div>
      <h2 class="font-extrabold text-xl mt-3 mb-4">
     ${post.title}
      </h2>
      <p class="inter text-lg text-stone-500 pb-5 mb-5 line-b">
       ${post.description}
      </p>
      <div class="card-icons flex justify-between">
        <div class="flex text-slate-600 gap-4">
          <div>
            <span class="mr-2"><i class="bx bx-message"></i></span
            >${post.comment_count}
          </div>
          <div>
            <span class="mr-2"
              ><i class="fa-regular fa-eye"></i></span
            >${post.view_count}
          </div>
          <div>
            <span class="mr-2"
              ><i class="fa-regular fa-clock"></i></span
            >${post.posted_time} min
          </div>
        </div>
        <button id="read-message-btn" class="message-icon text-green-500 scale-150">
                <i class="fa-solid fa-envelope-open"></i>
              </button>
      </div>
    </div>
    `;
    
    postCardContainer.appendChild(postCard);
  });
};

loadAllPost();

