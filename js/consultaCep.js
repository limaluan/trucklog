const pesquisarCep = async () => {
    let cep = document.getElementById('cep').value;
    var validacep = /^[0-9]{8}$/;
    if (cep.trim() === "" || !validacep.test(cep)) {
        document.getElementById('resposta').innerHTML = `<h5>Formato do CEP inválido</h5>`
    } else {
        await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        }).then((conteudo) => {
            if ("erro" in conteudo) {
                document.getElementById('resposta').innerHTML = `<h5>CEP não encontrado</h5>`
            } else {
                document.getElementById('resposta').innerHTML = 
                `<div class="card" style="width: 18rem;">                
                <div class="card-body">
                  <h5 class="card-title">${conteudo.cep}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Lougradouro: ${conteudo.logradouro}</li>
                    <li class="list-group-item">Localidade: ${conteudo.localidade}</li>
                    <li class="list-group-item">UF: ${conteudo.uf}</li>
                    <li class="list-group-item">A TruckLog atende na sua região</li>
                </ul>                  
                </div>
              </div> <hr/>`
            }
        })
    }
};