/* Posts Page JavaScript */

"use strict"

// Example: Define api in your script
const api = "http://microbloglite.us-east-2.elasticbeanstalk.com";


window.onload = () => {
    getAllPosts();
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
            // Example: displayPosts(posts);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            // Handle the error appropriately, e.g., show an error message to the user
            alert('Failed to fetch posts. Please try again later.');
        });
}

const displayPosts = (posts) => {
    let postsContainer = document.getElementById('postsContainer');
    if (postsContainer) {
        // Clear existing content
        postsContainer.innerHTML = '';

        // Create table element
        let table = document.createElement('table');
        table.classList.add('table', 'table-striped');

        // Create table header row
        let headerRow = document.createElement('thead');
        headerRow.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Post ID</th>
                <th>Username</th>
                <th>Created At</th>
            </tr>
        `;
        table.appendChild(headerRow);

        // Create table body
        let tableBody = document.createElement('tbody');
        posts.forEach(post => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${post.id}</td>
                <td>${post.postId}</td>
                <td>${post.username}</td>
                <td>${new Date(post.createdAt).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });

        // Append table body to table
        table.appendChild(tableBody);

        // Append table to postsContainer
        postsContainer.appendChild(table);
    } else {
        console.error('Posts container element not found.');
    }
}



