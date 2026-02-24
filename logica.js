// Função que aplica o tema
function aplicarTema() {
    const temaSalvo = localStorage.getItem('theme');
    const body = document.body;
    const checkbox = document.getElementById('theme-toggle');

    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
        if (checkbox) checkbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        if (checkbox) checkbox.checked = false;
    }
}

// Executa ao carregar qualquer página
aplicarTema();

// Lógica do Switch (só funciona se o botão existir na página)
const checkbox = document.getElementById('theme-toggle');
if (checkbox) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        aplicarTema(); // Aplica a mudança imediatamente
    });
}