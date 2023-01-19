const URL = "http://localhost:3000";

// See all ramen images in the div with the id of ramen-menu.
// request the data from the server to get all the ramen objects.
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div

// div#ramen-menu is on the DOM
// make request to get all Ramens from the path /ramens
// create images - one for each ramen
// images go in the div#ramen-menu

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// find the image, name header, the restaurant header, rating span, comments paragraph elements
// add event listener to each ramen image
// update the elements found with the ramen info

// Create a new ramen after submitting the new-ramen form.
// The new ramen should be added to the#ramen-menu div.
// The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page. no POST request needed

// find the ramen form
// add event listener submit
// prevent the refresh with preventDefault
// create new Ramen with the values in the inputs in the form
// add new ramen image to ramen menu div
// listen for the click and show that ramen info in the details

const ramenMenu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("img.detail-image");
const detailName = document.querySelector("h2.name");
const detailRestaurant = document.querySelector("h3.restaurant");
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");
const form = document.getElementById("new-ramen");

const renderOneRamen = (oneRamen) => {
  const image = document.createElement("img");
  image.src = oneRamen.image;
  ramenMenu.append(image);

  image.addEventListener("click", () => {
    detailImage.src = oneRamen.image;
    detailName.textContent = oneRamen.name;
    detailRestaurant.textContent = oneRamen.restaurant;
    detailRating.textContent = oneRamen.rating;
    detailComment.textContent = oneRamen.comment;
  });
};

fetch(URL + "/ramens")
  .then((response) => response.json())
  .then((ramenData) => {
    ramenData.forEach(renderOneRamen);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const restaurant = event.target.restaurant.value;
  const image = event.target.image.value;
  const rating = event.target.rating.value;
  const comment = event.target["new-comment"].value;

  const newRamen = {
    name,
    restaurant,
    image,
    rating,
    comment,
  };
  // const newRamen = {
  //   name: name,
  //   restaurant: restaurant,
  //   image: image,
  //   rating: rating,
  //   comment: comment
  // };

  renderOneRamen(newRamen);
});
