export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        return parsedResponse;
    })
}

let postCollection = [];

export const usePostCollection = () => {
    return [...postCollection];
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something with parsedResponse
        postCollection = parsedResponse
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

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
    .then(response => response.json())
}

export const deletePost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getPosts)
  }

  export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`)
      .then(response => response.json())
  }

  export const updatePost = postObj => {
    return fetch(`http://localhost:8088/posts/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
        .then(getPosts)
  }