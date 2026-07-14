export class TaskApiClass {
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
//# sourceMappingURL=taskApiClass.js.map