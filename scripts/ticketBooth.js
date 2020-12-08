const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", clickEvent => {
    switch(clickEvent.target.id){
        // If a ride ticket is purchased:
        case "rideTicket":
            const rideEvent = new CustomEvent("rideTicketPurchased");
            eventHub.dispatchEvent(rideEvent);
            break;
        // If a food ticket is purchased:
        case "foodTicket":
            const foodEvent = new CustomEvent("foodTicketPurchased");
            eventHub.dispatchEvent(foodEvent);
            break;
        // If a game ticket is purchased:
        case "gameTicket":
            const gameEvent = new CustomEvent("gameTicketPurchased");
            eventHub.dispatchEvent(gameEvent);
            break;
        // If a sideshow ticket is purchased:
        case "sideshowTicket":
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased");
            eventHub.dispatchEvent(sideshowEvent);
            break;
    };
});

// Creates a button with the given button id and button label)
const buttonCreator = (id, label) => `<div class="ticketBooth"><button id=${id}>${label}</btn></div>`;

export const ticketBooth = () => {
    contentTarget.innerHTML += 
    buttonCreator("rideTicket","Ride Ticket") +
    buttonCreator("foodTicket","Food Ticket") +
    buttonCreator("gameTicket","Game Ticket") +
    buttonCreator("sideshowTicket","SideShow Ticket")
};

