import { showAlert } from "../components/showAlert.js";
import { taskList } from "../data/taskList.js";
import type { Task } from "../interfaces/Task.js";

export function loadTasksAsync(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
        console.log("Cargando tareas...");
        setTimeout(() => {

            // Si funciona la promesa
            showAlert({ code: 200, message: "Tareas cargadas", type: "success" })
            resolve(taskList);

            // Si falla la promesa
            reject("No se pudieron cargar las tareas")
        }, 5000);

    })

}