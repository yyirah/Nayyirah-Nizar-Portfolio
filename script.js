document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const button = form.querySelector('button[type="submit"]');

            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Message Sent';
                button.disabled = true;

                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    form.reset();
                }, 1800);
            }
        });
    }
});
