document.getElementById("valuationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const timeline = document.getElementById("timeline").value;
    const message = document.getElementById("message").value;
    
    console.log({
        fullName,
        phone,
        email,
        timeline,
        message
    });

    alert("Thank you! Your form has been submitted.");
    
    document.getElementById("valuationForm").reset();
});
