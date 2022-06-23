const mudaPag = document.querySelector('#margemLog');


function formMelhore(){
 
    let strMensagens = localStorage.getItem('mb');
    let objMensagens = {};

    if(strMensagens){
        objMensagens = JSON.parse(strMensagens);
    }else{
            objMensagens = {mensagens:[]}
    }
    return objMensagens;

    
} 

function salvaMensagens(msg){
        localStorage.setItem ('mb', JSON.stringify (msg));
    }

function incluirMensagem(){
        let objMensagens = formMelhore();
        console.log(objMensagens);

        let strNome = document.getElementById('nome').value;
        let strEmail = document.getElementById('email').value;
        let strMensagens = document.getElementById('floatingTextarea2').value;
        let novoMensagem = {
            nome: strNome,
            email: strEmail,
            mensagem: strMensagens
        }
        objMensagens.mensagens.push(novoMensagem);
        
        salvaMensagens(objMensagens);
        document.getElementById ('nome').value = '';
        document.getElementById ('email').value='';
        document.getElementById('floatingTextarea2').value='';
    }

function verLogin(){
       let user = JSON.parse(localStorage.getItem('usuario'));
        
        if(user){           
            document.getElementById("margemLog").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>`;   
            mudaPag.href = "../perfil/perfil.html";
        }
        
        
    }
   
verLogin();
document.getElementById('btn-pronto').addEventListener('click', incluirMensagem);