document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const sectionId = this.getAttribute('href').substring(1); // Get the section ID
        const section = document.getElementById(sectionId);
        section.style.display = (section.style.display === 'block') ? 'none' : 'block'; // Toggle visibility
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message:\n"${message}"`);
    // Reset form fields
    this.reset();
});
