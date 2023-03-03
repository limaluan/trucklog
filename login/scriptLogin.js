const listar = async () => {
  await fetch(`https://serverest.dev/usuarios`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((userList) => {
      if (userList.length === 0) {
        document.getElementById(
          "resposta"
        ).innerHTML = `<h5>Nenhum usuário cadastrado</h5>`;
        return;
      }
      var cont = parseInt(userList.quantidade);
      const parar = parseInt(cont);
      document.querySelector("#quantidade").innerText = `(${cont})`;
      const ul = document.querySelector("#resposta");
      for (i = 0; i < parar; i++) {
        const li = document.createElement("li");
        li.classList.add("d-flex", "border-bottom");
        li.innerHTML = `<img
                      width="32"
                      height="32"
                      class="flex-shrink-0 me-2 rounded"
                      style="background-color: ${randomColor()};"
                    />

                    <p class="pb-3 mb-3 small lh-sm">
                      <strong
                        class="d-block text-gray-dark"
                      >${userList.usuarios[i].nome}</strong>
                      <strong
                        class="d-block text-primary fst-italic"
                      >${userList.usuarios[i].email}</strong>
                    </p>`;
        ul.appendChild(li);
      }
    });
};

listar();

const criar = async () => {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(`https://serverest.dev/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: `${nome}`,
      email: `${email}`,
      password: "teste",
      administrador: "true",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      if (!response) {
        alert(`${response.message}`);
        clearInputs();
        return;
      }
      alert(`${response.message}`);
      clearInputs();
      window.location.reload();
    })
    .catch((error) => console.log(error));
};

const clearInputs = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
