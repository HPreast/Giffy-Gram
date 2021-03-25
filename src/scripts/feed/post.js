import { getLikes, getLoggedInUser } from "../data/dataManager.js"

const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}

export const Post = (postObject) => {
  const currentUser = getLoggedInUser().id
  console.log("postObj", postObject)
  if(currentUser === postObject.user.id) {
    return `
      <section class="post">
        <header>
        <h3>Posted by: ${postObject.user.name}</h3>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p>${postObject.description}</p>
        <div><button id="edit__${postObject.id}">Edit</button></div>
        <button id="delete__${postObject.id}">Delete</button>
        <button id="like__${postObject.id}">Like</button>
        <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
      </section>
    `
  }else {
    return `
    <section class="post">
      <header>
      <h3>Posted by: ${postObject.user.name}</h3>
          <h2 class="post__title">${postObject.title}</h2>
      </header>
      <img class="post__image" src="${postObject.imageURL}" />
      <p>${postObject.description}</p>
      <button id="like__${postObject.id}">Like</button>
      <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
      </section> `
  }
}