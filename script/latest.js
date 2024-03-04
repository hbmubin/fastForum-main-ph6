const loadLatestPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const posts = await res.json();
  displayLatestPost(posts);
};

const displayLatestPost = (posts) => {
  const latestPostContainer = document.getElementById("latest-post-container");

  posts.forEach((post) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList = `card bg-base-100 border-2 border-stone-200`;
    cardDiv.innerHTML = `
    <figure class="px-5 pt-5">
    <img
      src="${post.cover_image}"
      alt=""
      class="rounded-xl"
    />
  </figure>
  <div class="card-body">
    <div class="flex text-slate-600">
      <span class="mr-2"
        ><i class="fa-regular fa-calendar"></i
      ></span>
      <h3>${post.author.posted_date}</h3>
    </div>
    <h2 class="card-title font-extrabold my-3">
      ${post.title}
    </h2>
    <p class="text-slate-600">
    ${post.description}

    </p>
    <div class="flex gap-3 mt-4">
      <div class="latest-card-img w-20 rounded-full overflow-hidden">
        <img src="${post.profile_image}" alt="" />
      </div>
      <div>
        <h2 class="font-bold">${post.author.name}</h2>
        <p class="text-sm text-slate-600">${post.author.designation}</p>
      </div>
    </div>
  </div>
    `;
    latestPostContainer.appendChild(cardDiv);
  });
};

loadLatestPosts();
