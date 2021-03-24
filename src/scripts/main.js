import { getUsers, getPosts, getMessages, getLoggedInUser, randomJoke, usePostCollection, createPost, deletePost, getSinglePost, updatePost } from "./data/dataManager.js"
import { postList } from "./feed/postList.js"
import { navBar } from "./nav/NavBar.js"
import { footer } from "./nav/footer.js"
import { PostEntry } from "./feed/postEntry.js"
import { postEdit } from "./feed/postEdit.js"



const showPostEntry = () => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
}
showPostEntry();

const showFilteredPosts = (year) => {
    const epoch = Date.parse(`01/01/${year}`);
    const filteredData = usePostCollection().filter(singlePost => {
        if (singlePost.timestamp >= epoch) {
            return singlePost
        }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = postList(filteredData);
}

const showFooter = () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = footer();
}
showFooter();

//Application event listeners
const applicationElement = document.querySelector(".giffygram");
applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
        const yearAsNumber = parseInt(event.target.value)

        console.log(`user wants to see post since ${yearAsNumber}`)
        showFilteredPosts(yearAsNumber);
    }
})

applicationElement.addEventListener("click", event => {
    if (event.target.id === "logout") {
        console.log("You clicked on logout")
    }
})

// applicationElement.addEventListener("click", event => {
//     if (event.target.id.startsWith("edit")) {
//         console.log("post clicked", event.target.id.split("--"))
//         console.log("the id is", event.target.id.split("--")[1])
//     }
// })
applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("edit")) {
        const postId = event.target.id.split("__")[1];
        getSinglePost(postId)
            .then(response => {
                showEdit(response);
            })
    }
})

applicationElement.addEventListener("click", event => {
    // event.preventDefault();
    if (event.target.id === "newPost__submit") {
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value
        const postObject = {
            title: title,
            imageURL: url,
            description: description,
            userId: 1,
            timestamp: Date.now()
        }
        createPost(postObject)
        location.reload();
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("updatePost")) {
        const postId = event.target.id.split("__")[1];
        //collect all the details into an object
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value
        const timestamp = document.querySelector("input[name='postTime']").value

        const postObject = {
            title: title,
            imageURL: url,
            description: description,
            userId: getLoggedInUser().id,
            timestamp: parseInt(timestamp),
            id: parseInt(postId)
        }

        updatePost(postObject)
            .then(response => {
                showPostList(response);
                location.reload();
            })
    }
})

const cancelEdit = (post) => {
    const cancelElement = document.querySelector(".entryForm");
    cancelElement.innerHTML = PostEntry(post)
}
document.addEventListener("click", event => {
    if (event.target.id.startsWith("newPost")) {
        cancelEdit();
    }
})

// End of application
//delete event listener
applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
        const postId = event.target.id.split("__")[1];
        deletePost(postId)
            .then(response => {
                showPostList();
            })
    }
})
//end of delete

//navBar
const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = navBar();
}
showNavBar();
//End of navBar


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

randomJoke();
getLoggedInUser();

const showEdit = (postObj) => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = postEdit(postObj);
}
