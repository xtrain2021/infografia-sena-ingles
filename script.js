function selectTab(index) {
    const cards = document.querySelectorAll('.trend-card');
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });

    buttons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    contents.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}

// Accesibilidad: permite cambiar de pestaña con las flechas izquierda y derecha del teclado
document.addEventListener('keydown', (event) => {
    const buttons = Array.from(document.querySelectorAll('.tab-btn'));
    const currentIndex = buttons.findIndex(btn => btn.classList.contains('active'));

    if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % buttons.length;
        selectTab(nextIndex);
    } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        selectTab(prevIndex);
    }
});
