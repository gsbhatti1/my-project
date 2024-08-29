// Add form submit event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Display a simple alert with the form data
    alert('Form Submitted!\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + phone + '\n' +
          'Message: ' + message);

    // Clear the form (optional)
    document.getElementById('contactForm').reset();
});
