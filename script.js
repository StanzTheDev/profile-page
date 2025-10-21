 // Reset validation messages
        function resetValidation() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(error => {
                error.style.display = 'none';
            });
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            resetValidation();
            
            const contactForm = document.getElementById('contactForm');
            
            if (contactForm) {
                console.log('Form found, adding event listener');
                
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    console.log('Form submitted');
                    resetValidation();

                    const fullName = document.getElementById('fullName');
                    const email = document.getElementById('email');
                    const subject = document.getElementById('subject');
                    const message = document.getElementById('message');
                    const successMessage = document.getElementById('contact-success');

                    let isValid = true;

                    // Name validation
                    if (!fullName.value.trim()) {
                        document.getElementById('name-error').style.display = 'block';
                        isValid = false;
                    }

                    // Email validation
                    if (!email.value.trim()) {
                        document.getElementById('email-error').style.display = 'block';
                        isValid = false;
                    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                        document.getElementById('email-error').style.display = 'block';
                        isValid = false;
                    }

                    // Subject validation
                    if (!subject.value.trim()) {
                        document.getElementById('subject-error').style.display = 'block';
                        isValid = false;
                    }

                    // Message validation
                    if (!message.value.trim()) {
                        document.getElementById('message-error').textContent = 'Please enter your message.';
                        document.getElementById('message-error').style.display = 'block';
                        isValid = false;
                    } else if (message.value.trim().length < 10) {
                        document.getElementById('message-error').textContent = 'Message must be at least 10 characters long.';
                        document.getElementById('message-error').style.display = 'block';
                        isValid = false;
                    }

                    console.log('Form validation result:', isValid);

                    // If form is valid, show success message and reset form
                    if (isValid) {
                        console.log('Form is valid, showing success message');
                        if (successMessage) {
                            successMessage.style.display = 'block';
                            
                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                successMessage.style.display = 'none';
                            }, 5000);
                        }
                        
                        // Reset the form
                        this.reset();
                    }
                });
            } else {
                console.log('Form not found!');
            }
        });