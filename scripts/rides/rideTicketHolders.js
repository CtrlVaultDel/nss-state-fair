const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const rideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => 
        contentTarget.innerHTML +=`<div class="person rider"></div>`)
}