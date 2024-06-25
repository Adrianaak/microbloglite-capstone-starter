/* Posts Page JavaScript */

"use strict"

// Example: Define api in your script
const api = "http://microbloglite.us-east-2.elasticbeanstalk.com";


window.onload = () => {
    getAllPosts();
    let logoutButton = document.querySelector("#logoutButton")

    logoutButton.addEventListener("click", logoutUser);
}

function logoutUser(event) {
    event.preventDefault();
    logout();


}

// Function to get all posts via fetch()
function getAllPosts() {
    const loginData = getLoginData();
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(api + "/api/posts", options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            // Do something with the posts array...
            console.log(posts);
            displayPosts(posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            // Handle the error appropriately, e.g., show an error message to the user
            alert('Failed to fetch posts. Please try again later.');
        });
}

const displayPosts = (posts) => {
    let postsTableBody = document.getElementById('postsTableBody');

    // Clear existing content
    postsTableBody.innerHTML = '';


    posts.forEach(post => {
        let row = postsTableBody.insertRow();
        row.innerHTML = `
                <td>${post._id}</td>
                <td>${post.text}</td>
                <td>${post.username}</td>
                <td>${new Date(post.createdAt).toLocaleString()}</td>
            `;
    });


}



