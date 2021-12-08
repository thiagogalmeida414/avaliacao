var botao = document.querySelector('#calcular')

botao.addEventListener("click", function(){
    
    var numero01 = parseInt(document.querySelector('#txtnumero01').value);

    let squaredNumber2 = Math.pow(numero01,2);
    
    document.querySelector('#resultado').innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Resultado</h4>
    <p>Resultado: ${squaredNumber2}</p>
</div>`;
});
