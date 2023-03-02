const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Carregando post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts - pegar os dados da API
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
    const separar = document.createElement("hr"); //aquiiii

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

// Área do comentário - Função async para criar a área de comentário
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



if (!postId) {
  getAllPosts();
} else {
  getPost(postId);
}

