const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const subjectInput = document.getElementById('contact-subject');
const messageInput = document.getElementById('contact-message');
const successMessage = document.getElementById('success-message');

const errorMessages = {
  name: document.getElementById('error-name'),
  email: document.getElementById('error-email'),
  subject: document.getElementById('error-subject'),
  message: document.getElementById('error-message')
};

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(field, message) {
  const input = document.getElementById(`contact-${field}`);
  const error = errorMessages[field];

  input.classList.add('error');
  error.textContent = message;
  error.classList.add('show');
}

function clearError(field) {
  const input = document.getElementById(`contact-${field}`);
  const error = errorMessages[field];

  input.classList.remove('error');
  error.textContent = '';
  error.classList.remove('show');
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    showError('name', 'Full name is required.');
    return false;
  }
  clearError('name');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === '') {
    showError('email', 'Email is required.');
    return false;
  }
  if (!emailRegex.test(value)) {
    showError('email', 'Please enter a valid email address (e.g., name@example.com).');
    return false;
  }
  clearError('email');
  return true;
}

function validateSubject() {
  const value = subjectInput.value.trim();
  if (value === '') {
    showError('subject', 'Subject is required.');
    return false;
  }
  clearError('subject');
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === '') {
    showError('message', 'Message is required.');
    return false;
  }
  if (value.length < 10) {
    showError('message', 'Message must be at least 10 characters long.');
    return false;
  }
  clearError('message');
  return true;
}

// Real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Clear errors on input
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') clearError('name');
});
emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() !== '') clearError('email');
});
subjectInput.addEventListener('input', () => {
  if (subjectInput.value.trim() !== '') clearError('subject');
});
messageInput.addEventListener('input', () => {
  if (messageInput.value.trim() !== '') clearError('message');
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Hide previous success message
  successMessage.classList.remove('show');

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  // If all valid, show success
  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    successMessage.classList.add('show');
    form.reset();

    // Focus on success message for screen readers
    successMessage.focus();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 5000);
  } else {
    // Focus on first error
    if (!isNameValid) nameInput.focus();
    else if (!isEmailValid) emailInput.focus();
    else if (!isSubjectValid) subjectInput.focus();
    else if (!isMessageValid) messageInput.focus();
  }
});