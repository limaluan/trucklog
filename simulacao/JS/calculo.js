function calcularFrete() {
    let origem = document.getElementById("cep").value;
    let destino = document.getElementById("cep2").value;
    let peso = document.getElementById("peso").value;
    let valorFrete = peso * 8.75;
    let resultado = document.getElementById("resultado");
    if(peso > 0){
    resultado.innerHTML =
          `<span style="display: inline-block;">
            <ul class="list-group">
            <li class="list-group-item " aria-disabled="true" style="font-size: medium;"><b>CALCULO DE FRETE</b></li>
            <li class="list-group-item"style="font-size: medium;">CEP de origem: ${origem}</li>
            <li class="list-group-item" style="font-size: medium;"> CEP de destino: ${destino} </li>
            <li class="list-group-item" style="font-size: medium;">Valor do frete: R$${valorFrete.toFixed(2)}</li>
            
          </ul>
          </span>`} else{
        alert('Digite o peso do produto')
        }
    }