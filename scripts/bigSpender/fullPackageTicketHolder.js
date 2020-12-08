// Selectors
const eventHub = document.querySelector("#state-fair");
const foodContentTarget = document.querySelector(".food");
const gameContentTarget = document.querySelector(".games");
const rideContentTarget = document.querySelector(".rides");
const sideshowContentTarget = document.querySelector(".sideshow");

export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", () => {
        foodContentTarget.innerHTML += `<div class="person bigSpender"></div>`;
        gameContentTarget.innerHTML += `<div class="person bigSpender"></div>`;
        rideContentTarget.innerHTML += `<div class="person bigSpender"></div>`;
        sideshowContentTarget.innerHTML += `<div class="person bigSpender"></div>`;
    })
}