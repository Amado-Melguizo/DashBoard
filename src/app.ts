import { enableGroupToggle } from "./components/groupToggle.js";
import { renderTaskCards } from "./components/renderTaskCards.js";
import { renderUserCards } from "./components/renderUserCards.js";
import { handleSidebar, initSidebarListeners } from "./components/sidebar.js";
import { dashConfig } from "./data/dashConfig.js";
import { taskList } from "./data/taskList.js";
import { users } from "./data/users.js";
import { userClass } from "./models/userClass.js";
import { getTasks } from "./services/tasksService.js";
import { getUsers, postUsers } from "./services/usersService.js";
import { getUser } from "./utils/userUtils.js";

/**
 * Métodos Simples
*/

// Modifica el primer usuario de la lista local (solo ejemplo)
getUser(users[0]!);

/**
 * Métodos de creación por mock de tarjetas
*/

// Renderiza usuarios locales convertidos a clase
renderUserCards(userClass);

// Renderiza tareas locales mock
renderTaskCards(taskList);

/**
 * Acciones extras & sidebar
*/

// Aplica el estado inicial del sidebar (tema + abierto/cerrado)
handleSidebar(dashConfig);

// Activa los listeners del sidebar (botones abrir/cerrar/cambiar tema)
initSidebarListeners();

// Permite abrir/cerrar los grupos de tarjetas con animación
enableGroupToggle();

/**
 * Métodos para obtener datos de la api y crear tarjetas
*/

// Carga usuarios desde la API y los renderiza
getUsers();

// Carga tareas desde la API y las renderiza
getTasks();

// Envía un usuario local a la API mediante POST
postUsers(users[0]);

