// document.addEventListener("DOMContentLoaded", () => {
// });

// wait till the page loads
// and then fetch the ramen
// find ramen menu div
// for each ramen add image to the ramen menu div

// listen for a click on an image in the ramen menu
// the ramen that was clicked on should appear in the ramen details and the comments and rating

// add event listener to form "submit"
// get values in inputs
// create element img src set to image input value

const url = "http://localhost:3000/ramens";
// document.addEventListener("DOMContentLoaded", () => {
//   const ramenMenu = document.getElementById("ramen-menu");

//   function displayRamen(oneRamen) {
//     const image = document.createElement("img");
//     image.src = oneRamen.image;
//     ramenMenu.append(image);

//     image.addEventListener("click", () => {
//       // const container = document.getElementById("ramen-detail");
//       // const imageToUpdate = container.getElementsByClassName("detail-image")[0];

//       const imageToUpdate = document.querySelector(
//         "#ramen-detail img.detail-image"
//       );
//       imageToUpdate.src = oneRamen.image;
//       imageToUpdate.alt = oneRamen.name;

//       const name = document.querySelector("#ramen-detail h2");
//       name.textContent = oneRamen.name;

//       const restaurant = document.querySelector("#ramen-detail h3");
//       restaurant.textContent = oneRamen.restaurant;

//       const rating = document.getElementById("rating-display");
//       rating.textContent = oneRamen.rating;

//       const comment = document.getElementById("comment-display");
//       comment.textContent = oneRamen.comment;
//     });
//   }

//   fetch(url)
//     .then((res) => res.json())
//     .then((ramen) => {
//       ramen.forEach(displayRamen);
//     });

//   const form = document.getElementById("new-ramen");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newRamen = {
//       name: e.target.name.value,
//       restaurant: e.target.restaurant.value,
//       image: e.target.image.value,
//       rating: e.target.rating.value,
//       comment: e.target["new-comment"].value,
//     };

//     displayRamen(newRamen);
//   });
// });

getRamen();
listenForSubmit();

function handleImageClick(oneRamen) {
  const imageToUpdate = document.querySelector(
    "#ramen-detail img.detail-image"
  );
  imageToUpdate.src = oneRamen.image;
  imageToUpdate.alt = oneRamen.name;

  const name = document.querySelector("#ramen-detail h2");
  name.textContent = oneRamen.name;

  const restaurant = document.querySelector("#ramen-detail h3");
  restaurant.textContent = oneRamen.restaurant;

  const rating = document.getElementById("rating-display");
  rating.textContent = oneRamen.rating;

  const comment = document.getElementById("comment-display");
  comment.textContent = oneRamen.comment;
}

function createImageEventListener(img, ramen) {
  img.addEventListener("click", () => handleImageClick(ramen));
}

function displayOneRamen(oneRamen) {
  const ramenMenu = document.getElementById("ramen-menu");
  const image = document.createElement("img");
  image.src = oneRamen.image;
  ramenMenu.append(image);
  createImageEventListener(image, oneRamen);
}

function displayAllRamen(allRamen) {
  allRamen.forEach(displayOneRamen);
}

function getRamen() {
  fetch(url)
    .then((response) => response.json())
    .then(displayAllRamen);
}

function handleSubmit(event) {
  event.preventDefault();
  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target["new-comment"].value,
  };

  displayOneRamen(newRamen);
}

function listenForSubmit() {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", handleSubmit);
}
