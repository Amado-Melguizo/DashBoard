import type { TaskApiClass } from "../models/taskApiClass.js";

export function renderTaskApiCards(taskList: TaskApiClass[]) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard"

        card.innerHTML = task.toCardHTML();

        listCards?.appendChild(card)

    });
}