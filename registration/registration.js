"use strict"

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const fullName = document.getElementById('fullName').value;
  const password = document.getElementById('password').value;
  

  registerUser(username, fullName, password);
});

function registerUser(username, fullName, password) {
  const url = 'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, fullName, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Registration successful:', data);
    alert('Registration successful! Please login with your credentials.');
    // Redirect to login page
    window.location.href = '/'; 
  })
  .catch(error => {
    console.error('Error registering user:', error);
    alert('Registration failed. Please try again.');
  });
}
