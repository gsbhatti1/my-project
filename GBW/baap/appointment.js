// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Initialize EmailJS with your Public Key
    emailjs.init("y7v0KOMHLhKKaU_1A"); // Replace with your actual Public Key

    // Listen for form submission
    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Disable submit button and show loading (optional improvement)
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        // Send form data to EmailJS
        emailjs.sendForm('service_8d2behj', 'template_i80bwoc', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Appointment request sent successfully!');

                // Redirect to the main page (index.html) after a short delay
                setTimeout(function() {
                    window.location.href = "../main-page/main-page.html"; // Adjust the URL if necessary
                }, 1000); // 1-second delay before redirecting
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send appointment request. Error: ' + JSON.stringify(error));
            })
            .finally(function() {
                // Re-enable the submit button after processing
                submitButton.disabled = false;
                submitButton.textContent = "Submit";
            });
    });
});
