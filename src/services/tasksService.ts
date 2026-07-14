import { renderTaskApiCards } from "../components/renderTaskApiCards.js";
import { showAlert } from "../components/showAlert.js";
import type { TaskApiResponse } from "../interfaces/TaskApiResponse.js";
import { mapTaskApiToClass } from "../utils/mappers.js";

const urlTasks: string = "https://dummyjson.com/todos";

export async function getTasks() {
    try {

        // Conseguimos los datos planos
        const response = await fetch(urlTasks);

        // Los convertimos en json pero no tienen métodos
        const data: TaskApiResponse = await response.json();

        // Convertimos los datos de la API en instancias de tu clase
        const dataTaskApi = data.todos.map(mapTaskApiToClass);

        // Validamos si los datos están o no
        if (dataTaskApi.length === 0) {
            console.warn("No se han añadido nuevas tareas");
            showAlert({ code: 204, message: "Datos cargados pero sin informacion", type: "warning" })
            return;
        }
        console.log('dataApi', dataTaskApi);

        renderTaskApiCards(dataTaskApi);

        //Actualizar contador de tareas
        document.getElementById("taskCount")!.textContent = dataTaskApi.length.toString();

        showAlert({ code: 200, message: "Tareas cargadas correctamente", type: "success" })

    } catch (error) {
        console.error("Error", error);
        showAlert({ code: 400, message: "Error al cargar las tareas", type: "error" })
    }

}