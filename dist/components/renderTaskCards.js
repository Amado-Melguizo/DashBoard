export function renderTaskCards(taskList) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard";
        card.innerHTML = `
        <h3>${task.title}</h3>
        <p>Descripción: ${task.description}</p>
        <p>Prioridad: ${task.priority}</p>
        <p class="${task.completed ? "completed" : "inProgress"}">
            Tarjeta Completada: ${task.completed ? "Completado" : "En progreso"}
        </p>
        `;
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
//# sourceMappingURL=renderTaskCards.js.map