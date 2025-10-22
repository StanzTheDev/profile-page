
function resetValidation() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    resetValidation();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    const errorName = document.getElementById('name-error');
    const errorEmail = document.getElementById('email-error');
    const errorSubject = document.getElementById('subject-error');
    const errorMessageEl = document.getElementById('message-error');

    let isValid = true;

    if (fullName.value.trim() === '') {
        errorName.textContent = 'Please enter your full name.';
        isValid = false;
        fullName.classList.add('error');
    } else {
        fullName.classList.remove('error');
    }

    if (email.value.trim() === '') {
        errorEmail.textContent = 'Please enter your email address.';
        isValid = false;
        email.classList.add('error');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errorEmail.textContent = 'Please enter a valid email address.';
        isValid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
    if (subject.value.trim() === '') {
        errorSubject.textContent = 'Please enter a subject.';
        isValid = false;
        subject.classList.add('error');
    } else {
        subject.classList.remove('error');
    }

    if (message.value.trim() === '') {
        errorMessageEl.textContent = 'Please enter your message.';
        isValid = false;
        message.classList.add('error');
    } else if (message.value.trim().length < 10) {
        errorMessageEl.textContent = 'Message must be at least 10 characters long.';
        isValid = false;
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

    if (isValid) {
        successMessage.style.display = 'flex';
        
        this.reset();
        
        [fullName, email, subject, message].forEach(field => {
            field.classList.remove('error');
        });
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 4000);
    }
});