const foodContentTarget = document.querySelector(".food");
const eventHub = document.querySelector("#state-fair");

export const foodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", () => 
        foodContentTarget.innerHTML +=`<div class="person eater"></div>`)
};