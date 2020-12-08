const rideContentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const rideTicketHolder = () => {
    eventHub.addEventListener("rideTicketPurchased", () => 
        rideContentTarget.innerHTML +=`<div class="person rider"></div>`)
};