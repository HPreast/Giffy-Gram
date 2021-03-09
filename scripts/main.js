import { getUsers } from "./data/dataManager.js"
import { getPosts } from "./data/dataManager.js"
import { getMessages } from "./data/dataManager.js"
import { getLoggedInUser } from "./data/dataManager.js"
import { randomJoke } from "./data/dataManager.js"

// console.log("logged in user", getLoggedInUser);
getLoggedInUser();
randomJoke();