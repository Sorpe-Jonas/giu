document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const page2 = document.querySelector('#page2');
    const popup = document.querySelector('#popup');
    const popupButton = document.querySelector('#closePopup');

    let currentMessage = 0;

    function showNextMessage() {
        if (currentMessage < messages.length) {
            messages[currentMessage].style.opacity = 1;
            setTimeout(() => {
                messages[currentMessage].style.opacity = 0;
                currentMessage++;
                setTimeout(showNextMessage, 2000);
            }, 3000);
        } else {
            page2.classList.remove('hidden');
        }
    }

    showNextMessage();

    setTimeout(() => {
        popup.classList.remove('hidden');
    }, 6000); // Delay for popup to appear

    popupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Gerar estrelas aleatórias no fundo
    function generateStars() {
        const starCount = 150; // Quantidade de estrelas
        const body = document.body;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            const size = Math.random() * (1.2 - 0.6) + 0.6; // Tamanho aleatório entre 0.6mm e 1.2mm
            const xPosition = Math.random() * 100; // Posição X aleatória (percentual)
            const yPosition = Math.random() * 100; // Posição Y aleatória (percentual)

            // Estilo da estrela
            star.style.position = 'absolute';
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.width = `${size}mm`;
            star.style.height = `${size}mm`;
            star.style.left = `${xPosition}%`;
            star.style.top = `${yPosition}%`;

            // Adiciona a estrela no body
            body.appendChild(star);
        }
    }

    generateStars(); // Chama a função para gerar as estrelas
});
