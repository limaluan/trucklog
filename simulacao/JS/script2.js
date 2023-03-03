function buscarCep2() {
    const buscaCep2 = document.getElementById('cep2').value;
     fetch(`https://viacep.com.br/ws/${buscaCep2}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado');
        } else {
            document.getElementById('resposta2').innerHTML = 
          `<span style="display: inline-block;"><ul class="list-group">
            <li class="list-group-item" style="font-size: medium;"><b>Destino</b></li>
            <li class="list-group-item" style="font-size: medium;">Estado: ${data.uf}</li>
            <li class="list-group-item" style="font-size: medium;">Cidade: ${data.localidade}</li>
            <li class="list-group-item" style="font-size: medium;">Bairro: ${data.bairro}</li>
            <li class="list-group-item" style="font-size: medium;">Logradouro: ${data.logradouro}</li>
          </ul>
          </span>`
        }
      })
      .catch(erro => {
        console.error(erro);
        alert('Erro ao buscar CEP');
      });
  }