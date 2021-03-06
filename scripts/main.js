// Import and invoke the ticket booth component function
import { ticketBooth } from "./ticketBooth.js";
import { rideTicketHolder } from "./rides/rideTicketHolder.js";
import { foodTicketHolder } from "./food/foodTicketHolder.js";
import { gameTicketHolder } from "./games/gameTicketHolder.js";
import { sideshowTicketHolder } from "./sideshows/sideshowTicketHolder.js";
import { fullPackageTicketHolder } from "./bigSpender/fullPackageTicketHolder.js";
import { totalCustomers } from "./customers/customers.js";

// Set up the ticket booth
ticketBooth();

// Provide functionality to the Ride Ticket button
rideTicketHolder();

// Provide functionality to the Food Ticket button
foodTicketHolder();

// Provide functionality to the Game Ticket button
gameTicketHolder();

// Provide functionality to the Sideshow Ticket button
sideshowTicketHolder();

// Provide functionality to the Full Package Ticket button
fullPackageTicketHolder();

// Provide functionality to the total tickets purchased at the top
totalCustomers();