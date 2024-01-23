function validateForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const acceptCGU = document.getElementById('acceptCGU').checked;
  console.log(document.getElementById('firstName'));

  // Reset error messages
  document.querySelectorAll('.error').forEach(error => error.remove());
  // Check if all form fields are filled

  const isempty = !firstName || !lastName || !age || !email || !confirmEmail || !password || !confirmPassword || !acceptCGU;
  if (isempty) {
    showError('firstName', 'Veuillez remplir tous les champs.');
  }
  
  if (firstName.length < 3) {
    showError('firstName', 'Le prénom doit faire au moins 3 lettres.');
  }

  if (lastName.length < 3) {
    showError('lastName', 'Le nom doit faire au moins 3 lettres.');
  }

  if (age < 18) {
    showError('age', 'Vous devez avoir au moins 18 ans.');
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    showError('email', 'Veuillez entrer une adresse email valide.');
  }

  if (!/\S+@\S+\.\S+/.test(confirmEmail)) {
    showError('confirmEmail', 'Veuillez entrer une adresse email de confirmaion valide.');
  }

  if (email !== confirmEmail) {
    showError('confirmEmail', 'Les adresses email ne sont pas identiques.');
  }

  if (password.length < 6) {
    showError('password', 'Le mot de passe doit faire au moins 8 caractères.');
  }

  if (password !== confirmPassword) {
    showError('confirmPassword', 'Les mots de passe ne sont pas identiques.');
  }

  if (!acceptCGU) {
    showError('acceptCGU', 'Vous devez accepter les CGU.');
  }



  // Check for errors
  const errors = document.querySelectorAll('.error');
  if (errors.length === 0) {
    // All fields are valid, redirect to success page or submit form
    window.location.href = 'success.html';
  }
}


function showError(field, message) {
  const inputElement = document.getElementById(field);
  let errorContainer = inputElement.parentNode.querySelector('.error-container');

  if (inputElement) {
    inputElement.classList.add('error-input');
  }

  // Check if error container already exists, create it if not
  if (!errorContainer) {
    errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    inputElement.parentNode.appendChild(errorContainer);
  }

  const errorElement = document.createElement('div');
  errorElement.className = 'error';
  errorElement.textContent = message;
  errorContainer.appendChild(errorElement);
}

// Add event listeners for input focus to remove error messages
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', () => {
    const errorContainer = input.parentNode.querySelector('.error-container');
    if (errorContainer) {
      errorContainer.remove();
    }
  });
});
