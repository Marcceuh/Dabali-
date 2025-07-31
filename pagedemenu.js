 // Interactivité JavaScript
 document.addEventListener('DOMContentLoaded', function() {
    // Gestion des boutons favoris
    const favorisButtons = document.querySelectorAll('.btn-favori');
    favorisButtons.forEach(button => {
        button.addEventListener('click', function() {
            const heart = this.querySelector('i');
            if (heart.classList.contains('fa-regular')) {
                heart.classList.remove('fa-regular');
                heart.classList.add('fa-solid');
                this.style.color = 'red';
            } else {
                heart.classList.remove('fa-solid');
                heart.classList.add('fa-regular');
                this.style.color = 'inherit';
            }
        });
    });

    // Gestion des boutons commander
    const commanderButtons = document.querySelectorAll('.btn-commander');
    commanderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platCard = this.closest('.menu-card');
            const platName = platCard.querySelector('.plat-title').textContent;
            alert(`Commande ajoutée : ${platName}`);
        });
    });

    // Gestion de la navigation
    const navButtons = document.querySelectorAll('.btn-nav');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Animation des cartes au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-card').forEach(card => {
        observer.observe(card);
    });
});