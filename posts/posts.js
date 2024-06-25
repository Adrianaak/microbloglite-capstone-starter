/* Posts Page JavaScript */

"use strict";

window.onload = () => {
    getPostsAsync();
}

const getPostsAsync = async () => {
    try {
        const loginData = await getLoginData(); // Wait for login data asynchronously

        const response = await fetch("https://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${loginData.token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();
        displayPosts(posts); // Display posts 
    } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle the error appropriately, e.g., show an error message to the user
    }
}

const getLoginInfo = async () => {
    // Simulate an asynchronous operation to retrieve login data (replace with actual implementation)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ token: localStorage.getItem('token') }); // Retrieve token from localStorage
        }, 1000); // Simulating a delay of 1 second (replace with actual implementation)
    });
}

const displayPosts = (posts) => {
     let postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        posts.forEach(post => {
            let postElement = document.createElement('div');
            postElement.classList.add('card', 'mb-3');
            postElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.content}</p>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    } else {
        console.error('Posts container element not found.');
    }
}

