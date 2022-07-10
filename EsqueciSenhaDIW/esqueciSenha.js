function verificarEmail(){
   
    let banco = JSON.parse(localStorage.getItem('db'));
    let email = document.getElementById('email').value;
    

    if(email == ""){
        alert('Campos necessários não preenchidos');
    }
 let x =  banco.registro.find(item => item.email==email);
    substitui(banco.registro,email);
}

function substitui(registros = [],email){
    let senha = document.getElementById('senha').value;
   for (let index = 0; index < registros.length; index++) {
       const element = registros[index];
       if(element.email == email){
           element.senha = senha;
          
           break;
       }
   }
   localStorage.setItem('db',JSON.stringify({registro:registros}));
  window.location.assign('../loginDIW/login.html');
}


document.getElementById('button-savep').addEventListener('click',verificarEmail);