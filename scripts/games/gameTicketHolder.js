// Selectors
const gameContentTarget = document.querySelector(".games");
const eventHub = document.querySelector("#state-fair");

export const gameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", () => 
        gameContentTarget.innerHTML +=`<div class="person player"></div>`)
};