const signInBtn =
document.getElementById("signin");

signInBtn.addEventListener("click", () => {

alert("Netflix Clone Project");

});

const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

card.addEventListener("click", () => {

alert(card.innerText);

});

});