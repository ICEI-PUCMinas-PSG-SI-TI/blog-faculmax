const mudaPag = document.querySelector('#margemLog');

function verLogin(){
    let user = JSON.parse(localStorage.getItem('usuario'));
     
     if(user){           
         document.getElementById("margemLog").innerHTML = user.usuario;   
         mudaPag.href = "../perfil/perfil.html";
     }
     
     
 }

verLogin();
const deletaDados = () =>{
    confirm('Tem certeza?')
    if(confirm){
        let db = JSON.parse(localStorage.getItem('db'))
        let user = JSON.parse(localStorage.getItem('usuario'));
        for(let i=0;i<db.registro.length;i++){
            console.log(db.registro)
            if(db.registro[i].nome==user.usuario){
               
                delete db.registro[i].nome
                delete db.registro[i].email
                delete db.registro[i].senha
              
                localStorage.removeItem('usuario');  
                localStorage.setItem('db',JSON.stringify(db))
                window.location.assign('../paginaPrincipal/principal.html');
            }
            
        }
       
    }

}
   

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
document.getElementById ('deleteAcc').addEventListener ('click', deletaDados);