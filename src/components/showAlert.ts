import type { Alert } from "../interfaces/Alerts.js";

export function showAlert(alert: Alert): void {
    const alertBox = document.createElement("div")
    alertBox.className = `alert ${alert.type}`
    alertBox.textContent = alert.message;

    document.body.appendChild(alertBox)

    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}