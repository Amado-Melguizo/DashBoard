import type { UserClass } from "../models/userClass.js";

export function renderUserCards(userClass: UserClass[]) {
    const listCards = document.getElementById("userCards");
    userClass.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard"

        card.innerHTML = user.toCardHTML()
        listCards?.appendChild(card)

    });
}
