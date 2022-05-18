const mudaPag = document.querySelector('#margemLog');


function formMelhore(){
 
    let strMensagens = localStorage.getItem('mb');
    let objMensagens = {};

    if(strMensagens){
        objMensagens = JSON.parse(strMensagens);
    }else{
            objMensagens = {mensagens:[
                {nome: "Pedro",email: "pedro@gmail.com",mensagem:"Acho que deveria ser mais rápida."},
                {nome: "Ana",email: "ana@gmail.com",mensagem:"Acho que deveria ser mais rápida."},
                {nome: "Gabriel",email: "gabriel@gmail.com",mensagem:"Acho que deveria ser mais rápida."}
            ]}
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
            document.getElementById("margemLog").innerHTML = user.usuario;   
            mudaPag.href = "../perfil/perfil.html";
        }
        
        
    }
   
verLogin();
document.getElementById('btn-pronto').addEventListener('click', incluirMensagem);