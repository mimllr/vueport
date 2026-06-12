export function initSkillPills() {
    if (window.__skillPillsInitialized) return;
    window.__skillPillsInitialized = true;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    document.querySelectorAll("[data-skill-pills]").forEach((card) => {
        if (!(card instanceof HTMLElement)) return;

        if (reducedMotion) {
            card.classList.add("is-populated");
            return;
        }

        requestAnimationFrame(() => {
            card.classList.add("is-populated");
        });
    });
}

declare global {
    interface Window {
        __skillPillsInitialized?: boolean;
    }
}
