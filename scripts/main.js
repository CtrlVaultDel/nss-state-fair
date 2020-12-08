// Import and invoke the ticket booth component function
import { ticketBooth } from "./ticketBooth.js";
import { rideTicketHolder } from "./rides/rideTicketHolder.js";
import { foodTicketHolder } from "./food/foodTicketHolder.js";
import { gameTicketHolder } from "./games/gameTicketHolder.js";

// Set up the ticket booth
ticketBooth();

// Provide functionality to the Ride Ticket button
rideTicketHolder();

// Provide functionality to the Food Ticket button
foodTicketHolder();

// Provide functionality to the Game Ticket button
gameTicketHolder();