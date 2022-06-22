function entrar(){
const usuario = document.querySelector('#usuario').value;
const senha = document.querySelector('#senha').value;
const email =  JSON.parse(localStorage.getItem('db'))||'[]';

for(let i=0;i<email.registro.length;i++){
    var mail = email.registro[i]
    
    if(mail.nome == usuario){
        var maile = mail.email;
        console.log("deu")
    }
   
}

let validaUser = 0;

const listaUser =  JSON.parse(localStorage.getItem('db'))||'[]';

for (var i = 0; i < listaUser.registro.length; i++) {
    var user = listaUser.registro[i];
   
    if (usuario == user.nome && senha == user.senha ) {      
        
       localStorage.setItem ('usuario', JSON.stringify({usuario, senha,maile}));
       
        window.location.assign('../paginaPrincipal/principal.html'); 
        validaUser = 1;
      
    } 
}
if (validaUser==0) {
    alert("Usuario ou senha inválidos");
}
    


return false;
}
function registro(){
    window.location.assign('../registroDIW/registro.html');
    
}


 
 
document.getElementById ('button-login').addEventListener ('click', entrar);
document.getElementById('button-registrar').addEventListener('click',registro)