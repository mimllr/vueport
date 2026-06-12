export function initRevealLists() {
    if (window.__revealListsInitialized) return;
    window.__revealListsInitialized = true;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    document.querySelectorAll("[data-reveal-list]").forEach((list) => {
        if (!(list instanceof HTMLElement)) return;

        if (reducedMotion) {
            list.classList.add("is-visible");
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry?.isIntersecting) return;
                list.classList.add("is-visible");
                observer.disconnect();
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(list);
    });
}

declare global {
    interface Window {
        __revealListsInitialized?: boolean;
    }
}
