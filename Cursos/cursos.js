const mudaPag = document.querySelector('#margemLog');

function verLogin(){
    let user = JSON.parse(localStorage.getItem('usuario'));
     
     if(user){           
         document.getElementById("margemLog").innerHTML = user.usuario;   
         mudaPag.href = "../perfil/perfil.html";
     }
     
     
 }

verLogin();