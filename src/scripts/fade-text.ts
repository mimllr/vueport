export function initFadeText() {
    if (window.__fadeTextInitialized) return;
    window.__fadeTextInitialized = true;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    document.querySelectorAll("[data-fade-text]").forEach((root) => {
        if (!(root instanceof HTMLElement)) return;

        if (reducedMotion) {
            root.classList.add("is-visible");
            return;
        }

        requestAnimationFrame(() => {
            root.classList.add("is-visible");
        });
    });
}

declare global {
    interface Window {
        __fadeTextInitialized?: boolean;
    }
}
