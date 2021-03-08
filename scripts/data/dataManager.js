export const getUsers = () => {
    return fetch("http://localhost:5000/users")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

export const getPosts = () => {
    return fetch("http://localhost:5000/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

export const getMessages = () => {
    return fetch("http://localhost:5000/messages")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

const loggedInUser = {
    id: 1,
    name: "Bryan",
    email: "bryan@me.com"
}

export const getLoggedInUser = () => {
    return loggedInUser;
}