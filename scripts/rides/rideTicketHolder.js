const contentTarget = document.querySelector(".rides");
const eventHub = document.querySelector("#state-fair");

export const rideTicketHolder = () => {
    eventHub.addEventListener("rideTicketPurchased", () => 
        contentTarget.innerHTML +=`<div class="person rider"></div>`)
};