import { UserApiClass } from "../models/userApiClass.js";
export function renderUserApiCards(userApiClass) {
    const listCards = document.getElementById("userCards");
    userApiClass.forEach(u => {
        const user = new UserApiClass(u.id, u.firstName, u.maidenName, u.lastName, u.email, u.username, u.role);
        const card = document.createElement("div");
        card.className = "userCard";
        console.log('userApiInfo', user);
        card.innerHTML = user.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
//# sourceMappingURL=renderUserApiCards.js.map