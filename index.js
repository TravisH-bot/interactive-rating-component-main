const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitBtn = document.getElementById("submit");
const rateBtn = document.getElementById("rate-again");
const myRating = document.getElementById("my-rating");
const myRates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

rateBtn.addEventListener("click", () => {
  mainContainer.classList.remove("hidden");
  thanksContainer.classList.add("hidden");
});

myRates.forEach((rate) => {
  rate.addEventListener("click", () => {
    myRating.innerText = rate.innerText;
  });
});
