// Selectors
const eventHub = document.querySelector("#state-fair");
const targetElement = document.querySelector(".ticketsPurchased__value");

export const totalCustomers = () => {
    // If a package ticket is purchased, increment the total tickets by 4
    eventHub.addEventListener("fullPackageTicketPurchased", () => ticketPurchase(4))

    // If a single ticket is purchased, increment the total tickets by 1
    eventHub.addEventListener("foodTicketPurchased", () => ticketPurchase(1))
    eventHub.addEventListener("gameTicketPurchased", () => ticketPurchase(1))
    eventHub.addEventListener("rideTicketPurchased", () => ticketPurchase(1))
    eventHub.addEventListener("sideshowTicketPurchased", () => ticketPurchase(1))
}

// Function that adds a specified number of tickets to the total
const ticketPurchase = (numOfTickets) => 
    targetElement.innerHTML = parseInt(targetElement.innerHTML) + numOfTickets;