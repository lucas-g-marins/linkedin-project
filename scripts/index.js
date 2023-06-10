let firstName = "Lucas marins";

let username = document.querySelectorAll(".nav__username");

for (const element of username) {
  element.innerText = firstName;
}

let jobTitle = "Winner";

let jobTitleElement = document.querySelector(".profile-card__title");

jobTitleElement.innerText = jobTitle;

let picture = "./assets/images/In-White-128.png";

let profilePicture = document.querySelector(".nav__profile-picture");

profilePicture.src = picture;
