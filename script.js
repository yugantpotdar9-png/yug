document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const track = document.getElementById('track').value;

        // Basic validation
        if (name && email && track) {
            // Simulate API call or successful registration
            alert(`Awesome, ${name}! Your registration for the ${track} track has been received. Check your inbox at ${email} for further instructions.`);

            // Clear the form
            form.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});