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
    return fetch("http://localhost:8088/posts?_expand=user")
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

let loggedInUser = {}

export const logoutUser = () => {
    loggedInUser = {}
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

  export const setLoggedInUser = (userObj) => {
      loggedInUser = userObj;
  }

  export const loginUser = (userObj) => {
      return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
      .then(response => response.json())
      .then(parsedUser => {
          console.log("parsedUser", parsedUser)
          if(parsedUser.length > 0){
              setLoggedInUser(parsedUser[0]);
              return getLoggedInUser();
          } else {
              return false;
          }
      })
  }

  export const registerUser = (userObj) => {
    return fetch(`http://localhost:8088/users`, {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(parsedUser => {
      setLoggedInUser(parsedUser);
      return getLoggedInUser();
    })
  } 

  export const getUserPosts = () => {
    const userId = getLoggedInUser().id
    return fetch(`http://localhost:8088/posts?_expand=user`)
      .then(response => response.json())
      .then(parsedResponse => {
        console.log("data with user", parsedResponse)
        postCollection = parsedResponse
        return parsedResponse;
      })
  }

  export const getLikes = (postId) => {
    return fetch(`http://localhost:8088/userLikes?postId=${postId}`)
      .then(response => response.json())
  }

  export const postLike =likeObject => {
      return fetch(`http://localhost:8088/userLikes/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(likeObject)
      })
      .then(response => response.json())
      .then(getPosts)
  }