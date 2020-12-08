// Selectors
const sideshowContentTarget = document.querySelector(".sideshow");
const eventHub = document.querySelector("#state-fair");

export const sideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", () => 
        sideshowContentTarget.innerHTML +=`<div class="person gawker"></div>`)
};