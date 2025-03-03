function gerarCodigo(button) {
    
    const codigo = "DEV" + Math.floor(Math.random() * 10000);
    
    
    const promoCodeElement = button.closest('.card-body').querySelector('.promo-code');
    
    
    promoCodeElement.innerText = codigo;
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
    });

    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado!"); 
});
