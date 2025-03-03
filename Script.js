function gerarCodigo(button) {
    // Gera o código
    const codigo = "DEV" + Math.floor(Math.random() * 10000);
    
    // Encontra o elemento .promo-code dentro da caixa onde o botão foi clicado
    const promoCodeElement = button.closest('.card-body').querySelector('.promo-code');
    
    // Atribui o código gerado ao elemento
    promoCodeElement.innerText = codigo;
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Quando o mouse passar sobre a caixa
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
    });

    // Quando o mouse sair da caixa
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!"); // Teste se o JS está rodando
});
