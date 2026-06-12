const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%&*?/+=<>";

function collectTextNodes(root: HTMLElement): Text[] {
    const nodes: Text[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

    let node = walker.nextNode();
    while (node) {
        if (node.textContent) nodes.push(node as Text);
        node = walker.nextNode();
    }

    return nodes;
}

function randomCharFor(target: string) {
    if (target === " " || target === "\n" || target === "\t") return target;
    if (/\d/.test(target)) {
        return DIGITS[Math.floor(Math.random() * DIGITS.length)];
    }
    if (/[A-Z]/.test(target)) {
        return UPPER[Math.floor(Math.random() * UPPER.length)];
    }
    if (/[a-z]/.test(target)) {
        return LOWER[Math.floor(Math.random() * LOWER.length)];
    }
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

function restoreNodeText(node: Text, text: string) {
    node.textContent = text;
}

export function initScrambleText() {
    if (window.__scrambleTextInitialized) return;
    window.__scrambleTextInitialized = true;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    document.querySelectorAll("[data-scramble-text]").forEach((root) => {
        if (!(root instanceof HTMLElement)) return;

        root.setAttribute("data-scramble-started", "");

        if (reducedMotion) {
            root.setAttribute("data-scramble-complete", "");
            return;
        }

        const textNodes = collectTextNodes(root);
        const originals = textNodes.map((node) => node.textContent ?? "");
        const targets = originals.join("");

        if (!targets.length) {
            root.setAttribute("data-scramble-complete", "");
            return;
        }

        const ranges = originals.reduce<
            Array<{ node: Text; start: number; end: number }>
        >((acc, text, index) => {
            const node = textNodes[index];
            const start = acc.length ? acc[acc.length - 1].end : 0;
            const end = start + text.length;
            acc.push({ node, start, end });
            return acc;
        }, []);

        const duration = Math.min(2800, Math.max(1500, targets.length * 7));

        const render = (resolvedCount: number) => {
            for (const range of ranges) {
                let value = "";
                for (let i = range.start; i < range.end; i++) {
                    value +=
                        i < resolvedCount
                            ? targets[i]
                            : randomCharFor(targets[i]);
                }
                range.node.textContent = value;
            }
        };

        render(0);

        const start = performance.now();
        let raf = 0;

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / duration);
            const resolvedCount = Math.floor(progress * targets.length);
            render(resolvedCount);

            if (progress < 1) {
                raf = requestAnimationFrame(tick);
                return;
            }

            for (const range of ranges) {
                restoreNodeText(
                    range.node,
                    targets.slice(range.start, range.end),
                );
            }
            root.setAttribute("data-scramble-complete", "");
        };

        raf = requestAnimationFrame(tick);
    });
}

declare global {
    interface Window {
        __scrambleTextInitialized?: boolean;
    }
}
