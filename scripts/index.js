const userProfile = {
  username: "Lucas",
  profilePicture: "./assets/images/In-White-128.png",
  jobTitle: "IT",
};

const loadUserProfile = () => {
  let findUsername = document.querySelectorAll(".nav__username");

  for (const element of findUsername) {
    element.innerText = userProfile.username;
  }

  let findJobTitle = document.querySelector(".profile-card__title");

  findJobTitle.innerText = userProfile.jobTitle;

  let findProfilePicture = document.querySelector(".nav__profile-picture");

  findProfilePicture.src = userProfile.profilePicture;
};

loadUserProfile();

const createPost = () => {
  // Get the text from the post text box
  let userPostText = document.querySelector(".data-post-text").value;
  console.log(userPostText);
  // create a new post div
  let postItem = document.createElement("div");
  postItem.classList.add("posts__item");

  let postUserName = document.createElement("div");
  postUserName.classList.add("posts__username");
  postUserName.innerText = userProfile.username;

  let postContent = document.createElement("div");
  postContent.classList.add("posts__content");

  let postContentPar = document.createElement("p");
  postContentPar.innerText = userPostText;

  let postLikeDiv = document.createElement("div");
  postLikeDiv.classList.add("posts__like");

  let postBtn = document.createElement("button");
  postBtn.innerText = "like";
  // append this new post div to the post container
  postItem.appendChild(postUserName);
  postItem.appendChild(postContent);
  postItem.appendChild(postLikeDiv);

  postContent.appendChild(postContentPar);

  postLikeDiv.appendChild(postBtn);

  document.querySelector(".posts").prepend(postItem);
};
