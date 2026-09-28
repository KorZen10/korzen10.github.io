const updateBackgroundScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const maxOffset = Math.max(window.innerHeight * 0.75, 200);
    const offset = progress * maxOffset;

    document.body.style.backgroundPosition = `center ${offset}px`;
};

window.addEventListener('scroll', updateBackgroundScroll, { passive: true });
window.addEventListener('resize', updateBackgroundScroll);

updateBackgroundScroll();
