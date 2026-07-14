export function renderUserCards(userClass) {
    const listCards = document.getElementById("userCards");
    userClass.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard";
        card.innerHTML = user.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
//# sourceMappingURL=renderUserCards.js.map