// Login Logic
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Admin" && password === "Admin") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-app").style.display = "flex";
    } else {
        document.getElementById("message").innerText = "Invalid login credentials.";
    }
}

// Post Tweet
function postTweet() {
    const tweetInput = document.getElementById("tweet-input");
    const tweetsContainer = document.getElementById("tweets");

    if (tweetInput.value.trim() !== "") {
        const tweet = document.createElement("div");
        tweet.className = "tweet";
        tweet.innerText = tweetInput.value;
        tweetsContainer.prepend(tweet);
        tweetInput.value = "";

        // Show Pong Notification
        showPongNotification();
    }
}

// Show Pong Notification
function showPongNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}
