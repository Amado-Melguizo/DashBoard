import { showLoader, hideLoader } from "../components/loader.js";
import { renderUserApiCards } from "../components/renderUserApiCards.js";
import { showAlert } from "../components/showAlert.js";
import type { User } from "../interfaces/User.js";
import type { UserApiResponse } from "../interfaces/UserApiResponse.js";
import  { mapUserApiToClass } from "../utils/mappers.js";

const urlUsers: string = "https://dummyjson.com/users";
export async function getUsers() {
    try {
        showLoader()

        // Conseguimos los datos planos
        const response = await fetch(urlUsers);

        // Los convertimos en json pero no tienen métodos
        const data: UserApiResponse = await response.json();

        // Convertimos los datos de la API en instancias de tu clase
        const dataUserApi = data.users.map(mapUserApiToClass);

        // Validamos si los datos están o no
        if (dataUserApi.length === 0) {
            console.warn("No se han añadido nuevos usuarios");
            showAlert({ code: 204, message: "Datos cargados pero sin informacion", type: "warning" })
            return;
        }

        console.log('dataApi', dataUserApi);

        renderUserApiCards(dataUserApi);

        // Actualizar contador de Usuarios
        document.getElementById("userCount")!.textContent = dataUserApi.length.toString();
        showAlert({ code: 200, message: "Usuarios cargados correctamente", type: "success" })

    } catch (error) {
        console.error("Error", error);
        showAlert({ code: 400, message: "Error al cargar los usuarios", type: "error" })

    } 

}


export async function postUsers(user: User | undefined) {

    try {
        showLoader();
        const res = await fetch(urlUsers, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user)
        })

        // Validacion de errores HTTP
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json()
        console.log("Usuario creado:", data);

        showAlert({ code: 200, message: "Ususario creado correctamente", type: "success" })

        return data;

    } catch (error) {
        console.error("Error", error);
        showAlert({ code: 400, message: "Error al crear el usuario", type: "error" })
    } finally {
        hideLoader()
    }
}