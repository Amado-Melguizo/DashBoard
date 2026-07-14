export function renderTaskApiCards(taskList) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard";
        card.innerHTML = task.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
//# sourceMappingURL=renderTaskApiCards.js.map