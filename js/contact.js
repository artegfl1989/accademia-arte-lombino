function sendEmail(event) {
    event.preventDefault();

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // EmailJS parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
        to_email: 'artegfllombino@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Show success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Reset form
            document.getElementById('contact-form').reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }, function(error) {
            // Show error message
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            console.error('Email sending failed:', error);
        });

    return false;
}