const mudaPag = document.querySelector('#margemLog');

function verLogin(){
    let user = JSON.parse(localStorage.getItem('usuario'));
     
     if(user){           
         document.getElementById("margemLog").innerHTML = user.usuario;   
         mudaPag.href = "../perfil/perfil.html";
     }
     
     
 }

verLogin();
   

function verficaDados(){

    
    let user = JSON.parse(localStorage.getItem('usuario'));

    document.getElementById("nomePerfil").innerHTML = user.usuario;
    document.getElementById("loginSenha").innerHTML = user.senha;  
}

function logout(){

    confirm('Tem certeza?');
    if(confirm){
       
    localStorage.removeItem('usuario');
    window.location.assign('../paginaPrincipal/principal.html');
}}

verficaDados();
document.getElementById ('deslogar').addEventListener ('click', logout);