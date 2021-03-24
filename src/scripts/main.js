import { getUsers, getPosts, getMessages, getLoggedInUser, randomJoke } from "./data/dataManager.js"
import { postList } from "./feed/postList.js"
import { navBar } from "./nav/NavBar.js"


const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = navBar();
}
showNavBar();

const showPostList = () => {
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML = postList(allPosts);
    })
}
showPostList();

const startGiffyGram = () => {
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = "Hello Cohort 47"
}
startGiffyGram();

// getUsers()
//     .then(data => {
// console.log("users", data)
//     });

// getPosts()
// .then(posts => {
//     console.log("posts", posts)
// });

// getMessages()
// .then(messages => {
//     console.log("messages", messages)
// });

getLoggedInUser();

randomJoke();