var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let users = [
    { name: "Amado", email: "amado@bde.es", role: "desarrollador", isActive: true },
    { name: "Ana", email: "ana@bde.es", role: 1, isActive: false },
    { name: "Juan", email: "juan@bde.es", role: "soporte", isActive: true },
];
let taskList = [
// { title: "Enseñar módulo Html", description: "Desarrollo del modulo Html", priority: "media", completed: true },
// { title: "Enseñar módulo Css", description: "Desarrollo del modulo Css", priority: "media", completed: true },
// { title: "Enseñar módulo Js", description: "Desarrollo del modulo Js", priority: "alta", completed: true },
// { title: "Enseñar módulo Ts", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
// { title: "Enseñar módulo Angular", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
];
let dashConfig = [
    { state: "close", theme: "dark", language: "esp", itemsPerPage: 10, apistage: "success", userRole: "user" },
    { state: true, theme: "light", language: "en", itemsPerPage: 15, apistage: "loading", userRole: "user" }
];
// Clases, herencia y demás
class UserClass {
    constructor(name, email, role, isActive) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isActive = isActive;
    }
    toggleActivate() {
        this.isActive = !this.isActive;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
    toCardHTML() {
        return `
        <h3>${this.name}</h3>
        <p>Email: ${this.email}</p>
        <p>Rol: ${this.role}</p>
        <p class="${this.isActive ? "active" : "inactive"}">
            Usuario Activo: ${this.isActive ? "Sí" : "No"}
        </p>        
        `;
    }
}
let userClass = [
    new UserClass("Amado", "amado@bde.es", "desarrollador", true)
];
class UserApiClass {
    constructor(id, firstName, maidenName, lastName, email, username, role) {
        this.id = id;
        this.firstName = firstName;
        this.maidenName = maidenName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.role = role;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
    updateRole(newRole) {
        this.role = newRole;
    }
    getFullName() {
        return `${this.firstName} ${this.maidenName} ${this.lastName}`;
    }
    toCardHTML() {
        console.log(this.username);
        return `
            <div class="user-card">
                <h3>${this.getFullName()}</h3>
                <p><strong>Usuario:</strong> ${this.username}</p>
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Rol:</strong> ${this.role}</p>
            </div>
        `;
    }
}
class TaskApiClass {
    constructor() { }
    toggleCompleted() {
        this.completed = !this.completed;
    }
    getStatusText() {
        return this.completed ? "Completada" : "Pendiente";
    }
    toCardHTML() {
        return `
            <div class="task-card ${this.completed ? "completed" : "in-progress"}">
                <h3>Tarea #${this.id}</h3>
                <p><strong>Descripción:</strong> ${this.todo}</p>
                <p><strong>Estado:</strong> ${this.getStatusText()}</p>
                <p><strong>ID Usuario:</strong> ${this.userId}</p>
            </div>
        `;
    }
}
class ThemeManager {
    constructor(initialTheme = "light") {
        this.theme = initialTheme;
    }
    getTheme() {
        return this.theme;
    }
    toggleTheme() {
        return this.theme = this.theme === "light" ? "dark" : "light";
    }
}
const manager = new ThemeManager();
manager.toggleTheme();
function getUser(user) {
    // console.log('Usuario antiguo: Nombre: ', user.name, 'Email: ', user.email);
    user.name = "pepe";
    user.email = "pepe@bde.es";
    // console.log('Usuario activo: Nombre: ', user.name, 'Email: ', user.email);
}
getUser(users[0]);
// Filtrar usuarios activos
function filterActiveUsers(users) {
    return users.filter(u => u.isActive);
}
// Filtrar por rol
function filterUsersByRole(users, role) {
    return users.filter(u => u.role === role);
}
// Filtrar por nombre (coincidencia parcial)
function filterUsersByName(users, name) {
    return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
}
// Filtrar por email
function filterUsersByEmail(users, email) {
    return users.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
}
function searchItems(items, query) {
    return items.filter(item => {
        var _a, _b;
        return ((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(query.toLowerCase())) ||
            ((_b = item.priority) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(query.toLowerCase()));
    });
}
// console.log(searchItems(taskList, "módulo"));
function renderUserCards(userClass) {
    const listCards = document.getElementById("userCards");
    userClass.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard";
        card.innerHTML = user.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
renderUserCards(userClass);
function renderUserApiCards(userApiClass) {
    const listCards = document.getElementById("userCards");
    userApiClass.forEach(u => {
        const user = new UserApiClass(u.id, u.firstName, u.maidenName, u.lastName, u.email, u.username, u.role);
        const card = document.createElement("div");
        card.className = "userCard";
        console.log('userApiInfo', user);
        card.innerHTML = user.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
function renderTaskCards(taskList) {
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
renderTaskCards(taskList);
function renderTaskApiCards(taskList) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard";
        card.innerHTML = task.toCardHTML();
        listCards === null || listCards === void 0 ? void 0 : listCards.appendChild(card);
    });
}
function handleSidebar(states) {
    const sidebar = document.getElementById("sidebar");
    const current = states[0];
    // --- Sidebar theme ---
    sidebar.className = current.theme === "dark" ? "sidebar-dark" : "sidebar-light";
    // --- Sidebar open/close ---
    if (current.state === "close" || current.state === false) {
        sidebar.classList.add("closed");
    }
    else {
        sidebar.classList.remove("closed");
    }
    // --- BODY THEME ---
    const body = document.body;
    if (current.theme === "light") {
        body.classList.add("body-dark");
        body.classList.remove("body-light");
    }
    else {
        body.classList.add("body-light");
        body.classList.remove("body-dark");
    }
}
handleSidebar(dashConfig);
function initSidebarListeners() {
    const cfg = dashConfig[0];
    if (!cfg)
        return;
    const themeManager = new ThemeManager();
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const toggleBtn = document.getElementById("toggleTheme");
    const icon = document.getElementById("themeIcon");
    // --- ICONO INICIAL ---
    icon.textContent = cfg.theme === "dark" ? "🌙" : "☀️";
    // --- ABRIR SIDEBAR ---
    openBtn === null || openBtn === void 0 ? void 0 : openBtn.addEventListener("click", () => {
        cfg.state = "open";
        handleSidebar(dashConfig);
    });
    // --- CERRAR SIDEBAR ---
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        cfg.state = "close";
        showAlert({ code: 0, message: "Sidebar cerrado", type: "info" });
        handleSidebar(dashConfig);
    });
    // --- CAMBIO DE TEMA + ICONO ---
    toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener("click", () => {
        cfg.theme = themeManager.toggleTheme();
        // Cambiar icono sin romper el tipo Theme
        icon.textContent = themeManager.getTheme() === "dark" ? "🌙" : "☀️";
        handleSidebar(dashConfig);
    });
}
initSidebarListeners();
function showAlert(alert) {
    const alertBox = document.createElement("div");
    alertBox.className = `alert ${alert.type}`;
    alertBox.textContent = alert.message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}
// Simulacion de una taskList de una Api
function loadTasksAsync() {
    return new Promise((resolve, reject) => {
        console.log("Cargando tareas...");
        setTimeout(() => {
            // Si funciona la promesa
            showAlert({ code: 200, message: "Tareas cargadas", type: "success" });
            resolve(taskList);
            // Si falla la promesa
            reject("No se pudieron cargar las tareas");
        }, 5000);
    });
}
/**
 * Función para convertir los datos de la API en instancias de tu clase
 * @param u
 * @returns
 */
function mapUserApiToClass(u) {
    return new UserApiClass(u.id, u.firstName, u.maidenName, u.lastName, u.email, u.username, u.role);
}
function mapTaskApiToClass(t) {
    const task = new TaskApiClass();
    task.id = t.id;
    task.todo = t.todo;
    task.completed = t.completed;
    task.userId = t.userId;
    return task;
}
const urlUsers = "https://dummyjson.com/users";
const urlTasks = "https://dummyjson.com/todos";
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Conseguimos los datos planos
            const response = yield fetch(urlUsers);
            // Los convertimos en json pero no tienen métodos
            const data = yield response.json();
            // Convertimos los datos de la API en instancias de tu clase
            const dataUserApi = data.users.map(mapUserApiToClass);
            // Validamos si los datos están o no
            if (dataUserApi.length === 0) {
                console.warn("No se han añadido nuevas tareas");
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
            showAlert({ code: 400, message: "Error al cargar las tareas", type: "error" });
        }
    });
}
function getTasks() {
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
getUsers();
getTasks();
function applyStaggerAnimation(containerId) {
    const cards = document.querySelectorAll(`#${containerId} .userCard, #${containerId} .taskCard`);
    cards.forEach((card, index) => {
        if (card instanceof HTMLElement) {
            card.classList.add("stagger");
            card.style.animationDelay = `${index * 60}ms`;
        }
    });
}
function enableGroupToggle() {
    const userGroup = document.getElementById("userGroup");
    const userCards = document.getElementById("userCards");
    const taskGroup = document.getElementById("taskGroup");
    const taskCards = document.getElementById("taskCards");
    userGroup.addEventListener("click", () => {
        userCards.classList.toggle("expanded");
        userCards.classList.toggle("collapsed");
        if (userCards.classList.contains("expanded")) {
            applyStaggerAnimation("userCards");
        }
    });
    taskGroup.addEventListener("click", () => {
        taskCards.classList.toggle("expanded");
        taskCards.classList.toggle("collapsed");
        if (taskCards.classList.contains("expanded")) {
            applyStaggerAnimation("taskCards");
        }
    });
}
enableGroupToggle();
export {};
//# sourceMappingURL=app.js.map