var botao = document.querySelector('#calcular')
botao.addEventListener("click", function(){
var n01 = document.querySelector('#txtNumero01').value;
var n02 = document.querySelector('#txtNumero02').value;
var n03 = document.querySelector('#txtNumero03').value;

if (n01 % 2 == 0){
    var resultado = ('Par');
    n01 = (n01 * 3);
  }
  
  else {
    var resultado = ('Impar');
    n01 = (n01 * 3);
  }

  if (n02 % 2 == 0){
    var resultado = ('Par');
    n02 = (n02 * 3);
  }
  
  else {
    var resultado = ('Impar');
    n02 = (n02 * 3);
  }

  if (n03 % 2 == 0){
    var resultado = ('Par');
    n03 = (n03 * 3);
  }
  
  else {
    var resultado = ('Impar');
    n03 = (n03 * 3);
  }

document.querySelector('#result-nome').innerHTML = n01 + '' + n02 + '' + n03;
    document.querySelector('#resultado').innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Resultado</h4>
    <p>Primeiro Resultado: ${n01}</p>
    <p>Segundo Resultado: ${n02}</p>
    <p>Terceiro Resultado: ${n03}</p>
</div>`;
});