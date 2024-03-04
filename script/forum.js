const loadPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  displayPost(posts);
};
const postContainer = document.getElementById("post-container");
const displayPost = (posts) => {
  posts.forEach((post) => {
    const title = post.title;
    const view = post.view_count;
    const activity = post.isActive;
    const postCard = document.createElement("div");
    postCard.classList = `postCard card border-2 border-stone-200 p-8 flex md:flex-row flex-col md:gap-0 gap-3`;
    postCard.innerHTML = ` <div class="card-image w-20 mr-6 relative">
    <img class="rounded-xl" src="${post.image}" alt="" />
    <div id="dot" 
      class="h-3 w-3 ${checkActive(activity)} rounded-full absolute -top-1 -right-1"
    ></div>
  </div>
  <div class="card-content w-full flex-1">
    <div class="flex gap-4 inter font-medium text-slate-600">
      <p >#<span class="category">${post.category}</span></p>
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
      <button id="read-message-btn" onclick="addMessage('${title}', '${view}')" class="message-icon text-green-500 scale-150">
              <i class="fa-solid fa-envelope-open"></i>
            </button>
    </div>
  </div>


    `;
    postContainer.appendChild(postCard);
  });
};

loadPost();

let readCount = 0;
const addMessage = (title, view) => {
  readCount++;
  const readCountDiv = document.getElementById("read-count");
  readCountDiv.innerText = readCount;
  const readMessageContainer = document.getElementById(
    "read-message-container"
  );
  const readDiv = document.createElement("div");
  readDiv.classList = `flex flex-row justify-between items-center bg-white p-5 rounded-xl`;
  readDiv.innerHTML = `<h2 class="text-xl font-semibold">${title}</h2>
  <p class="text-stone-500 text-lg"><i class="fa-regular fa-eye mr-2"></i></span
    >${view}</p>`;
  const noMessage = document.getElementById("no-message");
  noMessage.classList.add("hidden");
  readMessageContainer.appendChild(readDiv);
};

const searchBtn = () => {
  Loading();
  const categoryClasses = document.getElementsByClassName("category");
  const inputSearch = document.getElementById("searchId");
  const inputV = inputSearch.value;
  const inputValue = inputV.toLowerCase();
  for (const categoryClass of categoryClasses) {
    const category = categoryClass.innerText;
    const categoryModified = category.toLowerCase();
    categoryClass.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "hidden"
    );
    if (categoryModified != inputValue) {
      categoryClass.parentNode.parentNode.parentNode.parentNode.classList.add(
        "hidden"
      );
    }
  }
};

const Loading = () => {
  const loadingId = document.getElementById("loading");
  const latestPostContainer = document.getElementById("latest-post-container");
  const discussMain = document.getElementById("discuss-main");
  loadingId.classList.remove("hidden");
  discussMain.classList.add("hidden");
  latestPostContainer.classList.add("hidden");
  setTimeout(function () {
    discussMain.classList.remove("hidden");
    latestPostContainer.classList.remove("hidden");
    loadingId.classList.add("hidden");
  }, 2000);
};

const checkActive = (activity) => {
  if (activity) {
    return "bg-green-500";
  } else {
    return "bg-red-500";
  }
};
