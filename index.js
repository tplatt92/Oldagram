const profileAvatar = document.getElementById("profile-avatar")
const profileName = document.getElementById("profile-name-el")
const profileLocation = document.getElementById("profile-location-el")
const postText = document.getElementById("post-text-el")
const userName = document.getElementById("username")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// render profile avatar, profile name and location. 

profileAvatar.innerText = posts[2].avatar;
profileName.textContent = posts[2].name;
profileLocation.textContent = posts[2].location;

// render like counter and add event listener to increment counter

const totalCount = document.getElementById("like-count-el")
let count = posts[2].likes
totalCount.innerHTML= count + " likes";

    const handleIncrement = () => {
    count++;
    totalCount.innerHTML= count + " likes";
    }

const heart = document.getElementById("like-el")
heart.addEventListener("click", handleIncrement);

const postImage = document.getElementById("post-img")
postImage.addEventListener("dblclick", handleIncrement)

// render post text. 

userName.textContent = posts[2].username
postText.textContent = posts[2].comment

