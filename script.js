let numeroSecreto; 
let campochute = document.getElementById("campochute") 
let chutar = document.getElementById("chutar")
let mensagem = document.getElementById(" mensagem ")

function iniciarjogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;

  mensagem.textContent = "";
  campochute.value ="" ;
  chutar.textContent = "chutar!" ;

  campochute.disabled = false;
  campochute.focus();
  console.log(numeroSecreto);
   

  chutar.removeEventListener("click", iniciarjogo);
  chutar.addEventListener("click", verificarChute);
}

function verificarChute(){
  let chute = parseInt(campochute.value); 


if (isNaN(chute) || chute < 1 || chute > 100 ){
   mensagem.textContent =" Por favor, digite um numero entre 1 e 100 "
   mensagem.style.color = '#e5ff00ff'

   campochute.value='';
   return;
}
 if(chute === numeroSecreto) {
 mensagem.textContent  = " Parabens, voce acertou o numero secreto " + numeroSecreto + " ! "
 mensagem.style.color = '#e5ff00ff';
 finalizarjogo();
 }else if (chute < numeroSecreto){
    mensagem.textContent = "Muito baixo! tente outro numero";
    mensagem.style.color = '#ffae00ff'
 }else if (chute > numeroSecreto){
    mensagem.textContent = "Muito alto! tente outro numero";
    mensagem.style.color = '#ffa600ff'
 }

 campochute.value= '';
 campochute.focus();
console.log(chute)
}

function finalizarjogo(){
    campochute.disabled = true ;
    chutar.textContent = "jogar novamente! "

    
     chutar.removeEventListener("click", iniciarjogo);
     chutar.addEventListener("click", verificarChute);

 }
iniciarjogo();