let rating = null;
let thankYouState = false;
const ratingDiv = document.getElementById("rating-box")
const thankYouDiv = document.getElementById("thank-you")
const ratingFinal = document.getElementById("rating")

function setRating(id) {
  if (rating != null) {
    const oldButton = document.getElementById(`${rating}`);
    oldButton.classList.remove("bg-primary-orange", "text-secondary-0")
  }

  rating = id;
  const button = document.getElementById(`${rating}`);
  button.classList.add("bg-primary-orange", "text-secondary-0");

  const submitBtn = document.getElementById("submit");
  submitBtn.removeAttribute('disabled');
}

function submitRating() {
  thankYouState = true;
  ratingDiv.classList.add("hidden");
  thankYouDiv.classList.remove("hidden");
  ratingFinal.innerHTML = rating;
}
