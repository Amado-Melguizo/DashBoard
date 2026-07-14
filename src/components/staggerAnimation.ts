export function applyStaggerAnimation(containerId: string) {
    const cards = document.querySelectorAll(`#${containerId} .userCard, #${containerId} .taskCard`);

    cards.forEach((card, index) => {
        if (card instanceof HTMLElement) {
            card.classList.add("stagger");
            card.style.animationDelay = `${index * 60}ms`;
        }
    });

}