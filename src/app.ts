import type { Alert } from "./types/Alerts";
import type { DashConfig } from "./types/DashConfig";
import type { Task } from "./types/Task";
import type { User } from "./types/User";


let users: User[] = [
    { name: "Amado", email: "amado@bde.es", role: "desarrollador", isActive: true },
    { name: "Ana", email: "ana@bde.es", role: 1, isActive: false },
    { name: "Juan", email: "juan@bde.es", role: "soporte", isActive: true },
];

let taskList: Task[] = [
    { title: "Enseñar módulo Html", description: "Desarrollo del modulo Html", priority: "media", completed: true },
    { title: "Enseñar módulo Css", description: "Desarrollo del modulo Css", priority: "media", completed: true },
    { title: "Enseñar módulo Js", description: "Desarrollo del modulo Js", priority: "alta", completed: true },
    { title: "Enseñar módulo Ts", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
    { title: "Enseñar módulo Angular", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
];

let dashConfig: DashConfig[] = [
    { state: "close", theme: "dark", language: "esp", itemsPerPage: 10, apistage: "success", userRole: "user" },
    { state: true, theme: "light", language: "en", itemsPerPage: 15, apistage: "loading", userRole: "user" }
]


function getUsers(user: User): void {

    console.log('Usuario antiguo: Nombre: ', user.name, 'Email: ', user.email);
    user.name = "pepe";
    user.email = "pepe@bde.es";
    console.log('Usuario activo: Nombre: ', user.name, 'Email: ', user.email);
}

getUsers(users[0]!)

// Filtrar usuarios activos
function filterActiveUsers(users: User[]): User[] {
    return users.filter(u => u.isActive);
}

console.log(filterActiveUsers(users));


// Filtrar por rol
function filterUsersByRole(users: User[], role: string | number): User[] {
    return users.filter(u => u.role === role);
}

// Filtrar por nombre (coincidencia parcial)
function filterUsersByName(users: User[], name: string): User[] {
    return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
}

// Filtrar por email
function filterUsersByEmail(users: User[], email: string): User[] {
    return users.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
}



function searchItems<T extends Task>(
    items: T[],
    query: string
): T[] {
    return items.filter(item =>
        (item.title?.toLowerCase().includes(query.toLowerCase())) ||
        (item.priority?.toLowerCase().includes(query.toLowerCase()))
    );
}
console.log(searchItems(taskList, "módulo"));

function renderUserCards(users: User[]) {
    const listCards = document.getElementById("userCards");
    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard"

        card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Rol: ${user.role}</p>
        <p class="${user.isActive ? "active" : "inactive"}">
            Usuario Activo: ${user.isActive ? "Sí" : "No"}
        </p>        
        `;

        listCards?.appendChild(card)

    });
}

renderUserCards(users)


function renderTaskCards(taskList: Task[]) {
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

renderTaskCards(taskList)


function handleSidebar(states: { state: "open" | "close" | boolean, theme: "dark" | "light" }[]) {
    const sidebar = document.getElementById("sidebar")!;
    const current = states[0]!;

    // --- Sidebar theme ---
    sidebar.className = current.theme === "dark" ? "sidebar-dark" : "sidebar-light";

    // --- Sidebar open/close ---
    if (current.state === "close" || current.state === false) {
        sidebar.classList.add("closed");
    } else {
        sidebar.classList.remove("closed");
    }

    // --- BODY THEME ---
    const body = document.body;

    if (current.theme === "light") {
        body.classList.add("body-dark");
        body.classList.remove("body-light");
    } else {
        body.classList.add("body-light");
        body.classList.remove("body-dark");
    }
}


handleSidebar(dashConfig);

function initSidebarListeners() {
    const cfg = dashConfig[0];
    if (!cfg) return;

    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const toggleBtn = document.getElementById("toggleTheme");
    const icon = document.getElementById("themeIcon") as HTMLElement;

    // --- ICONO INICIAL ---
    icon.textContent = cfg.theme === "dark" ? "🌙" : "☀️";

    // --- ABRIR SIDEBAR ---
    openBtn?.addEventListener("click", () => {
        cfg.state = "open";
        handleSidebar(dashConfig);
    });

    // --- CERRAR SIDEBAR ---
    closeBtn?.addEventListener("click", () => {
        cfg.state = "close";
        showAlert({ code: 0, message: "Sidebar cerrado", type: "info" });
        handleSidebar(dashConfig);
    });

    // --- CAMBIO DE TEMA + ICONO ---
    toggleBtn?.addEventListener("click", () => {
        cfg.theme = cfg.theme === "dark" ? "light" : "dark";

        // Cambiar icono sin romper el tipo Theme
        icon.textContent = cfg.theme === "dark" ? "🌙" : "☀️";

        handleSidebar(dashConfig);
    });
}

initSidebarListeners();

function showAlert(alert: Alert): void {
    const alertBox = document.createElement("div")
    alertBox.className = `alert ${alert.type}`
    alertBox.textContent = alert.message;

    document.body.appendChild(alertBox)

    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}