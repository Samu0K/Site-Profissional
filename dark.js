function irParaHome() {
    window.location.href = "index.html"; // Muda a página atual
}
const btn = document.querySelector('#theme-toggle');

btn.addEventListener('change', () => {
    // Adiciona ou remove a classe "dark-mode" no <body>
    document.body.classList.toggle('dark-mode');
    
    // Dica: Você pode salvar a escolha do usuário no navegador
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
// Ao carregar a página, verifica se o modo dark estava ativo
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').checked = true;
    }
};