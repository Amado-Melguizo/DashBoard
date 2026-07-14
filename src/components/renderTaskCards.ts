import type { Task } from "../interfaces/Task.js";

export function renderTaskCards(taskList: Task[]) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard"

        card.innerHTML = `
        <h3>${task.title}</h3>
        <p>Descripción: ${task.description}</p>
        <p>Prioridad: ${task.priority}</p>
        <p class="${task.completed ? "completed" : "inProgress"}">
            Tarjeta Completada: ${task.completed ? "Completado" : "En progreso"}
        </p>
        `;

        listCards?.appendChild(card)

    });
}