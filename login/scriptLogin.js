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
      var lista = [];
      document.querySelector("#quantidade").innerText = `(${cont})`;
      const pUsername = document.querySelector("#username");
      const pUserEmail = document.querySelector("#userEmail");

      for (i = 0; i < parar; i++) {
        lista.push(i + 1 + " " + userList.usuarios[i].nome);
      }

      document.getElementById(
        "resposta"
      ).innerHTML = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${"Usuários"}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Lista:</b> ${lista}</li>
                    </ul>
                </div><br>`;
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
