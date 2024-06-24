"use strict"

// Function to handle form submission
function handleRegistration(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(document.getElementById('registration-form'));
    const userData = {
        username: formData.get('username'),
        fullName: formData.get('fullName'),
        password: formData.get('password')
    };

    // Example: Handle multiple users (could be replaced with actual backend logic)
    const users = [
        {
            username: "adrianaak",
            fullName: "Adriana Kendricks",
            password: "password24"
        },
        {
            username: "john_doe",
            fullName: "John Doe",
            password: "johns_password"
        },
        {
            username: "alice_smith",
            fullName: "Alice Smith",
            password: "alices_password"
        },
        userData // New user data from form
    ];

    console.log(users); // Output users array (for testing)

    // Here you can handle further processing such as sending data to a backend server
    // For now, we'll just log a message
    alert('Registration Successful! Check console for details.'); 

    // Clear the form fields after submission (optional)
    document.getElementById('registration-form').reset();
}

// Event listener for form submission
document.getElementById('registration-form').addEventListener('submit', handleRegistration);
