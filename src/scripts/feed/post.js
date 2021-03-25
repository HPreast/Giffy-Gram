import { getLoggedInUser } from "../data/dataManager.js"

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
        <p>${postObject.timestamp}</p>
        <p>${postObject.id}</p>
        <div><button id="edit__${postObject.id}">Edit</button></div>
        <button id="delete__${postObject.id}">Delete</button>
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
      <p>${postObject.timestamp}</p>
      <p>${postObject.id}</p>
      </section> `
  }
}