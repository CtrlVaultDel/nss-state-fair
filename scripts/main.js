// Import and invoke the ticket booth component function
import { ticketBooth } from "./ticketBooth.js";
import { rideTicketHolders } from "./rides/rideTicketHolders.js";
import { foodTicketHolders } from "./food/foodTicketHolders.js";

// Set up the ticket booth
ticketBooth();

// Provide functionality to the Ride Ticket button
rideTicketHolders();

// Provide functionality to the Food Ticket button
foodTicketHolders();