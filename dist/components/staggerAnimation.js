export function applyStaggerAnimation(containerId) {
    const cards = document.querySelectorAll(`#${containerId} .userCard, #${containerId} .taskCard`);
    cards.forEach((card, index) => {
        if (card instanceof HTMLElement) {
            card.classList.add("stagger");
            card.style.animationDelay = `${index * 60}ms`;
        }
    });
}
//# sourceMappingURL=staggerAnimation.js.map