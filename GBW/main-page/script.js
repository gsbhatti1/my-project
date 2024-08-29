// Add smooth scrolling behavior for navigation links
document.querySelectorAll('.floating-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Initially set page 1 to be visible
// window.onload = function () {
//     document.querySelector('.page').classList.add('active');
// };



//  // Function to load the contact page into the iframe and show the div
//  function loadContact() {
//     // Show the div with id "page3"
//     var page3Div = document.getElementById('page3');
//     page3Div.classList.add('active');

//     // Load the contact.html page into the iframe
//     var iframe = document.getElementById('contact-frame');
//     iframe.src = '../contact/contact.html';
// }

