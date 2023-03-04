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

const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>`;

async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();
  loadingElement.classList.add("hide");

  // data.map((post) => {
    for (let i = 0; i < 5; i++) {
    const post = data[i];
    const div = document.createElement("div");
    // const title = document.createElement("h3");
    // const body = document.createElement("p");
    // const image = document.createElement("img");
    // const link = document.createElement("a");
    // const separar = document.createElement("hr");

    // title.innerText = post.title;
    // body.innerText = post.body;
    // link.innerText = "Comentar post";
    // link.setAttribute("href", `./enviar-comentario06.html?id=${post.id}`);

    // div.appendChild(title);
    // div.appendChild(body);
    // div.appendChild(image);
    // div.appendChild(link);
    // div.appendChild(separar);
      div.id = `post-${post.id}`;
      
    div.innerHTML =
    `<section class="text-black p-3 mb-5 rounded shadow" style="max-width: 800px; margin: 10px auto; background: white;">
        <div class="d-flex align-items-center">
            <h5 class="">${post.title}</h5>
            <h4>${post.body}</h4>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <p class="">Data de envio: <span style="font-weight: bold;">03/03/2023</span></p>
            <p class="">Avaliação: <span class="post-${post.id} rating">
              ${starIcon}
              ${starIcon}
              ${starIcon}
              ${starIcon}
              ${starIcon}
            </span></p>
        </div>
    </section>`;
    postsContainer.appendChild(div);
      
  
}
  // });
}
getAllPosts();

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
  // const email = document.createElement("h3");
  // const commentBody = document.createElement("p");

  // email.innerText = comment.email;
  // commentBody.innerText = comment.body;

  // div.appendChild(email);
  // div.appendChild(commentBody);
  div.innerHTML =
    `<section class="text-black p-3 mb-5 rounded shadow" style="max-width: 800px; margin: 10px auto; background: white;">
        <div class="d-flex align-items-center">
            <h5 class="">${comment.email}</h5>
            <h4>${comment.body}</h4>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <p class="">Data de envio: <span style="font-weight: bold;">03/03/2023</span></p>
            <p class="">Avaliação: <span class="post-comment rating">
              ${starIcon}
              ${starIcon}
              ${starIcon}
              ${starIcon}
              ${starIcon}
            </span></p>
        </div>
    </section>`;
  commentsContainer.appendChild(div);
  //Salvar o comentário no localStorage em um array de comentários e ao carregar a página, verificar se existe algum comentário salvo no localStorage e se existir, carregar os comentários salvos no localStorage
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
