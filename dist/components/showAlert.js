export function showAlert(alert) {
    const alertBox = document.createElement("div");
    alertBox.className = `alert ${alert.type}`;
    alertBox.textContent = alert.message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
        alertBox.remove();
    }, 5000);
}
//# sourceMappingURL=showAlert.js.map