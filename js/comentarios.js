// Referência: https://github.com/cristijung/JsModule/blob/main/Aula07/app-comment/js/script06-api.js

const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const sendCommentBtn = document.querySelector("#send-comment");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();
  loadingElement.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const body = document.createElement("p");
    const image = document.createElement("img");
    const link = document.createElement("a");
    const separar = document.createElement("hr");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Comentar post";
    link.setAttribute("href", `./enviar-comentario06.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(image);
    div.appendChild(link);
    div.appendChild(separar);
    postsContainer.appendChild(div);
  });
}

async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const dataPost = await responsePost.json();

  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  });
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);
  commentsContainer.appendChild(div);
}

async function postComment(comment) {
  const response = await fetch(url, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  createComment(data);
}

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let comment = {
    email: emailInput.value,
    body: bodyInput.value,
  };

  comment = JSON.stringify(comment);

  postComment(comment);
});
