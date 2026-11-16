export const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const scrollToSection = (id: string, instant = false) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({
        behavior: instant || prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
    })
    target.focus({ preventScroll: true })
}
