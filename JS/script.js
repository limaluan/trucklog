function buscarCep() {
    const buscaCep = document.getElementById('cep').value;
     fetch(`https://viacep.com.br/ws/${buscaCep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado');
        } else {
            document.getElementById('resposta').innerHTML = 
         `<div class="card" style="width: 18rem;" style="background-color: aqua;">
         <div class="card-body" ><ul class="list-group">
         <li class="list-group-item disabled" aria-disabled="true"><b>Endereço</b></li>
         <li class="list-group-item">Estado: ${data.uf}</li>
         <li class="list-group-item">Cidade: ${data.localidade}</li>
         <li class="list-group-item">Bairro: ${data.bairro}</li>
         <li class="list-group-item">Logradouro: ${data.logradouro}</li>
       </ul>
       </div>
       </div>`
        }
      })
      .catch(erro => {
        console.error(erro);
        alert('Erro ao buscar CEP');
      });
  }