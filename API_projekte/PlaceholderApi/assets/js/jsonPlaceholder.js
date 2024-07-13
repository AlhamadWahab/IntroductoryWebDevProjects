let userArray = [];
let userPosts = [];
const userUrl = 'https://jsonplaceholder.typicode.com/users/';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
let previousButtonId = 0;

document.getElementById('sideContainer').innerHTML = '';
document.querySelector('.contentContainer').innerHTML = '';

// Function to fetch all users and render them as buttons
async function getAllUserAndPosts() {
    try {
        const response = await fetch(userUrl);
        if (!response.ok) {
            throw new Error('Error loading user data');
        }
        userArray = await response.json();
        for (let user of userArray) {
            document.getElementById('sideContainer').innerHTML +=
                `
                <div onclick="displayUserPosts(${user.id})" class="userNameEmail" id="user-btn-${user.id}">
                    <h3 id="username">${user.name}</h3>
                    <p id="uEmail">${user.email}</p>
                </div><br><br>
                `;
        }
        document.querySelector('.contentContainer').innerHTML = `<h2 style="display: flex; justify-content: center; align-items: center; height: 100%;">Click on any user to see his posts</h2>`;
    } catch (error) {
        document.getElementById('sideContainer').innerHTML = error.message;
    }
}

// Function to display posts of a specific user
async function displayUserPosts(userId) {
    if (previousButtonId) {
        document.getElementById(`user-btn-${previousButtonId}`).style.border = ''; // Remove border from previous button
    }
    changeBorderOnClick(userId);
    previousButtonId = userId;
    let specificUserPostsUrl = `${userUrl}${userId}/posts`;
    try {
        const response = await fetch(specificUserPostsUrl);
        if (!response.ok) {
            throw new Error('Error loading user posts');
        }
        userPosts = await response.json();
        document.querySelector('.contentContainer').innerHTML = ''; // Clear previous posts
        for (let post of userPosts) {
            document.querySelector('.contentContainer').innerHTML +=
                `
                <div class="userPosts">
                    <h5 id="userTitlePost">${post.title}</h5>
                    <hr />
                    <p id="uContent">
                    ${post.body}
                    </p>
                </div><br><br>
                `;
        }
    } catch (error) {
        document.querySelector('.contentContainer').innerHTML = error.message;
    }
}

// Function to apply border to clicked button
function changeBorderOnClick(id) {
    document.getElementById(`user-btn-${id}`).style.border = 'solid red 2px';
}

// Fetch all users and render them on page load
getAllUserAndPosts();