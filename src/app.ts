import type { Alert } from "./types/Alerts";
import type { DashConfig, Theme } from "./types/DashConfig";
import type { Task } from "./types/Task";
import type { TaskApi } from "./types/TaskApi";
import type { TaskApiResponse } from "./types/TaskApiResponse ";
import type { User } from "./types/User";
import type { UserApi } from "./types/UserApi";
import type { UserApiResponse } from "./types/UserApiResponse";


let users: User[] = [
    { name: "Amado", email: "amado@bde.es", role: "desarrollador", isActive: true },
    { name: "Ana", email: "ana@bde.es", role: 1, isActive: false },
    { name: "Juan", email: "juan@bde.es", role: "soporte", isActive: true },
];



let taskList: Task[] = [
    // { title: "Enseñar módulo Html", description: "Desarrollo del modulo Html", priority: "media", completed: true },
    // { title: "Enseñar módulo Css", description: "Desarrollo del modulo Css", priority: "media", completed: true },
    // { title: "Enseñar módulo Js", description: "Desarrollo del modulo Js", priority: "alta", completed: true },
    // { title: "Enseñar módulo Ts", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
    // { title: "Enseñar módulo Angular", description: "Desarrollo del modulo Ts", priority: "alta", completed: false },
];

let dashConfig: DashConfig[] = [
    { state: "close", theme: "dark", language: "esp", itemsPerPage: 10, apistage: "success", userRole: "user" },
    { state: true, theme: "light", language: "en", itemsPerPage: 15, apistage: "loading", userRole: "user" }
]

// Clases, herencia y demás

class UserClass {
    constructor(
        public name: string,
        public email: string,
        public role: string | number,
        public isActive: boolean
    ) { }

    toggleActivate() {
        this.isActive = !this.isActive
    }

    updateEmail(newEmail: string) {
        this.email = newEmail
    }

    toCardHTML() {
        return `
        <h3>${this.name}</h3>
        <p>Email: ${this.email}</p>
        <p>Rol: ${this.role}</p>
        <p class="${this.isActive ? "active" : "inactive"}">
            Usuario Activo: ${this.isActive ? "Sí" : "No"}
        </p>        
        `
    }
}

let userClass: UserClass[] = [
    new UserClass("Amado", "amado@bde.es", "desarrollador", true)
];


class UserApiClass {
    constructor(
        public id: number,
        public firstName: string,
        public maidenName: string,
        public lastName: string,
        public email: string,
        public username: string,
        public role: string
    ) { }

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

    updateRole(newRole: string) {
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
    id!: number;
    todo!: string;
    completed!: boolean;
    userId!: number;

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
    private theme: string;

    constructor(initialTheme: string = "light") {
        this.theme = initialTheme;
    }

    getTheme(): string {
        return this.theme;
    }

    toggleTheme(): Theme {
        return this.theme = this.theme === "light" ? "dark" : "light";
    }

}

const manager = new ThemeManager()

manager.toggleTheme();

function getUser(user: User): void {

    // console.log('Usuario antiguo: Nombre: ', user.name, 'Email: ', user.email);
    user.name = "pepe";
    user.email = "pepe@bde.es";
    // console.log('Usuario activo: Nombre: ', user.name, 'Email: ', user.email);
}

getUser(users[0]!)

// Filtrar usuarios activos
function filterActiveUsers(users: User[]): User[] {
    return users.filter(u => u.isActive);
}


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
// console.log(searchItems(taskList, "módulo"));

function renderUserCards(userClass: UserClass[]) {
    const listCards = document.getElementById("userCards");
    userClass.forEach(user => {
        const card = document.createElement("div");
        card.className = "userCard"

        card.innerHTML = user.toCardHTML()
        listCards?.appendChild(card)

    });
}

renderUserCards(userClass)

function renderUserApiCards(userApiClass: UserApiClass[]) {
    const listCards = document.getElementById("userCards");
    userApiClass.forEach(u => {
        const user = new UserApiClass(u.id, u.firstName, u.maidenName, u.lastName,
            u.email, u.username, u.role);

        const card = document.createElement("div");
        card.className = "userCard"
        console.log('userApiInfo', user);

        card.innerHTML = user.toCardHTML()
        listCards?.appendChild(card)

    });
}


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


function renderTaskApiCards(taskList: TaskApiClass[]) {
    const listCards = document.getElementById("taskCards");
    taskList.forEach(task => {
        const card = document.createElement("div");
        card.className = "taskCard"

        card.innerHTML = task.toCardHTML();

        listCards?.appendChild(card)

    });
}



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
    const themeManager = new ThemeManager()

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
        cfg.theme = themeManager.toggleTheme();

        // Cambiar icono sin romper el tipo Theme
        icon.textContent = themeManager.getTheme() === "dark" ? "🌙" : "☀️";

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

// Simulacion de una taskList de una Api

function loadTasksAsync(): Promise<Task[]> {
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

/**
 * Función para convertir los datos de la API en instancias de tu clase
 * @param u 
 * @returns 
 */
function mapUserApiToClass(u: UserApi): UserApiClass {
    return new UserApiClass(
        u.id,
        u.firstName,
        u.maidenName,
        u.lastName,
        u.email,
        u.username,
        u.role
    );
}
function mapTaskApiToClass(t: TaskApi): TaskApiClass {
    const task = new TaskApiClass();

    task.id = t.id;
    task.todo = t.todo;
    task.completed = t.completed;
    task.userId = t.userId;

    return task;
}


const urlUsers: string = "https://dummyjson.com/users";
const urlTasks: string = "https://dummyjson.com/todos";

async function getUsers() {
    try {

        // Conseguimos los datos planos
        const response = await fetch(urlUsers);

        // Los convertimos en json pero no tienen métodos
        const data: UserApiResponse = await response.json();

        // Convertimos los datos de la API en instancias de tu clase
        const dataUserApi = data.users.map(mapUserApiToClass);

        // Validamos si los datos están o no
        if (dataUserApi.length === 0) {
            console.warn("No se han añadido nuevas tareas");
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
        showAlert({ code: 400, message: "Error al cargar las tareas", type: "error" })

    }

}
async function getTasks() {
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

getUsers()
getTasks()


function enableGroupToggle() {
    const userGroup = document.getElementById("userGroup")!;
    const userCards = document.getElementById("userCards")!;
    const taskGroup = document.getElementById("taskGroup")!;
    const taskCards = document.getElementById("taskCards")!;

    userGroup.addEventListener("click", () => {
        userCards.classList.toggle("expanded");
        userCards.classList.toggle("collapsed");
    });

    taskGroup.addEventListener("click", () => {
        taskCards.classList.toggle("expanded");
        taskCards.classList.toggle("collapsed");
    });
}

enableGroupToggle()

document.getElementById("userCount")!.textContent = users.length.toString();
document.getElementById("taskCount")!.textContent = taskList.length.toString();
