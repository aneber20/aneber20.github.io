const modalTargets = document.querySelectorAll('[prof-exp-btn]');

modalTargets.forEach((button) => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('prof-exp-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.style.display = 'block';
            // Add event listener to close the modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('close')) {
                    modal.style.display = 'none';
                }
            });
        }
    });
});