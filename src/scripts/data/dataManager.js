export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

const loggedInUser = {
    id: 1,
    name: "Bryan",
    email: "bryan@bn.com"
}

export const getLoggedInUser = () => {
    return {...loggedInUser};
}

const getJokes = () => {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {
          "Accept": "application/json"
      }
    })
    
    .then(response => response.json())

}

const tellJoke = (getJokes) => {
    return `
    <p>${getJokes}</p>`
}

// if(document.getElementById("status") != null){
//     var idPost=document.getElementById("status").innerHTML;
// }

const contentElement = document.getElementById("tellJokes")

export const randomJoke = () => {
    getJokes()
    .then(response => {
        console.log(response.joke);
        let jokeHTMLRep = "";
        
            jokeHTMLRep += tellJoke(response.joke);
        
        contentElement.innerHTML += `${jokeHTMLRep}`
        
    })
}

