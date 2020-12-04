const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased");
        eventHub.dispatchEvent(rideEvent);
    }
    else if(clickEvent.target.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodTicketPurchased");
        eventHub.dispatchEvent(foodEvent);
    }
})

export const ticketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}