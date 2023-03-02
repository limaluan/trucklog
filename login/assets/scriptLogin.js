const listar = async () => {

    if (false) {
        document.getElementById('resposta').innerHTML = `<h5>O campo CEP deve ser preenchido</h5>`
    } else {
        await fetch(`https://serverest.dev/usuarios`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        }).then((usuarios) => {
            if (usuarios.length === 0) {
                document.getElementById('resposta').innerHTML = `<h5>CEP não encontrada</h5>`
            } else {
                console.log(usuarios)
                var cont = parseInt(usuarios.quantidade);
                const parar  = parseInt(cont);
                var lista = []
                for (i = 0; i < parar; i++){
                    lista.push(i+1 + " " + usuarios.usuarios[i].nome) ;
                }

                document.getElementById('resposta').innerHTML =
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${"Usuários"}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Lista:</b> ${lista}</li>
                    </ul>
                </div><br>`
            }
        })
    }
};

const criar = async () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (false) {
        document.getElementById('resposta').innerHTML = `<h5>O campo CEP deve ser preenchido</h5>`
    } else {
        await fetch(`https://serverest.dev/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
            "nome": `${nome}`,
            "email": `${email}`,
            "password": "teste",
            "administrador": "true" })
        }).then(response => response.json())
        .then((json) => console.log(json));
    }
};
