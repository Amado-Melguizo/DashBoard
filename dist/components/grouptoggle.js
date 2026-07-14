import { applyStaggerAnimation } from "./staggerAnimation.js";
export function enableGroupToggle() {
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
//# sourceMappingURL=grouptoggle.js.map