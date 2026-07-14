var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showLoader, hideLoader } from "../components/loader.js";
import { renderUserApiCards } from "../components/renderUserApiCards.js";
import { showAlert } from "../components/showAlert.js";
import { mapUserApiToClass } from "../utils/mappers.js";
const urlUsers = "https://dummyjson.com/users";
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            showLoader();
            // Conseguimos los datos planos
            const response = yield fetch(urlUsers);
            // Los convertimos en json pero no tienen métodos
            const data = yield response.json();
            // Convertimos los datos de la API en instancias de tu clase
            const dataUserApi = data.users.map(mapUserApiToClass);
            // Validamos si los datos están o no
            if (dataUserApi.length === 0) {
                console.warn("No se han añadido nuevos usuarios");
                showAlert({ code: 204, message: "Datos cargados pero sin informacion", type: "warning" });
                return;
            }
            console.log('dataApi', dataUserApi);
            renderUserApiCards(dataUserApi);
            // Actualizar contador de Usuarios
            document.getElementById("userCount").textContent = dataUserApi.length.toString();
            showAlert({ code: 200, message: "Usuarios cargados correctamente", type: "success" });
        }
        catch (error) {
            console.error("Error", error);
            showAlert({ code: 400, message: "Error al cargar los usuarios", type: "error" });
        }
    });
}
export function postUsers(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            showLoader();
            const res = yield fetch(urlUsers, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            });
            // Validacion de errores HTTP
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
            }
            const data = yield res.json();
            console.log("Usuario creado:", data);
            showAlert({ code: 200, message: "Ususario creado correctamente", type: "success" });
            return data;
        }
        catch (error) {
            console.error("Error", error);
            showAlert({ code: 400, message: "Error al crear el usuario", type: "error" });
        }
        finally {
            hideLoader();
        }
    });
}
//# sourceMappingURL=usersService.js.map