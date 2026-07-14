var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { renderTaskApiCards } from "../components/renderTaskApiCards.js";
import { showAlert } from "../components/showAlert.js";
import { mapTaskApiToClass } from "../utils/mappers.js";
const urlTasks = "https://dummyjson.com/todos";
export function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Conseguimos los datos planos
            const response = yield fetch(urlTasks);
            // Los convertimos en json pero no tienen métodos
            const data = yield response.json();
            // Convertimos los datos de la API en instancias de tu clase
            const dataTaskApi = data.todos.map(mapTaskApiToClass);
            // Validamos si los datos están o no
            if (dataTaskApi.length === 0) {
                console.warn("No se han añadido nuevas tareas");
                showAlert({ code: 204, message: "Datos cargados pero sin informacion", type: "warning" });
                return;
            }
            console.log('dataApi', dataTaskApi);
            renderTaskApiCards(dataTaskApi);
            //Actualizar contador de tareas
            document.getElementById("taskCount").textContent = dataTaskApi.length.toString();
            showAlert({ code: 200, message: "Tareas cargadas correctamente", type: "success" });
        }
        catch (error) {
            console.error("Error", error);
            showAlert({ code: 400, message: "Error al cargar las tareas", type: "error" });
        }
    });
}
//# sourceMappingURL=tasksService.js.map