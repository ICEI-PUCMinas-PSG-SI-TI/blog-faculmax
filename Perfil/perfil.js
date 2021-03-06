const mudaPag = document.querySelector('#margemLog');

function verLogin() {
    let user = JSON.parse(localStorage.getItem('usuario'));

    if (user) {
        document.getElementById("margemLog").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>`;
        mudaPag.href = "../perfil/perfil.html";
    }


}

verLogin();
const deletaDados = () => {
    
    if (confirm('Tem certeza?')) {
        let db = JSON.parse(localStorage.getItem('db'))
        let user = JSON.parse(localStorage.getItem('usuario'));
        for (let i = 0; i < db.registro.length; i++) {
            if (db.registro[i].nome == user.usuario) {

                delete db.registro[i].nome
                delete db.registro[i].email
                delete db.registro[i].senha

                localStorage.removeItem('usuario');
                localStorage.setItem('db', JSON.stringify(db))
                window.location.assign('../index.html');
            }

        }

    }
}


function verficaDados() {


    let user = JSON.parse(localStorage.getItem('usuario'));


    document.getElementById("nomePerfil").innerHTML = `Usuário <p style="padding-top:5px;">${user.usuario}</p>  `;
    document.getElementById("loginSenha").innerHTML = user.senha;
    document.getElementById("email").innerHTML = user.maile;
}

function logout() {

    
    if (confirm('Tem certeza?')==true) {

        localStorage.removeItem('usuario');
        window.location.assign('../index.html');
    }
}


const trocarSenha = () => {

    
   
    if (confirm('Tem certeza?')==true) {
        let novaSenha = prompt("Digite sua nova senha: ")

        let db = JSON.parse(localStorage.getItem('db'))
        let user = JSON.parse(localStorage.getItem('usuario'));
        for (let i = 0; i < db.registro.length; i++) {
            if (db.registro[i].nome == user.usuario) {
             
                db.registro[i].senha = novaSenha;
                localStorage.setItem('db', JSON.stringify(db))
                localStorage.setItem('usuario', JSON.stringify(db))
                localStorage.removeItem('usuario');
                window.location.assign('../index.html');
            }

        }

    }
}
const trocarEmail = () => {

    
    if (confirm('Tem certeza?')==true) {
        let novoEmail = prompt("Digite seu novo Email: ")

        let db = JSON.parse(localStorage.getItem('db'))
        let user = JSON.parse(localStorage.getItem('usuario'));
        for (let i = 0; i < db.registro.length; i++) {

            if (db.registro[i].email == user.maile) {


                if(JSON.stringify(db.registro).match(novoEmail)==null){                  
                db.registro[i].email = novoEmail;
                localStorage.setItem('db', JSON.stringify(db))
                localStorage.setItem('usuario', JSON.stringify(db))
                localStorage.removeItem('usuario');
                window.location.assign('../index.html');
                }else{
                    alert("Email já está em uso")
                }
               
            }

        }

    }
}



verficaDados();

document.getElementById('deslogar').addEventListener('click', logout);
document.getElementById('deleteAcc').addEventListener('click', deletaDados);
document.getElementById('trocaSenha').addEventListener('click', trocarSenha);
document.getElementById('trocaEmail').addEventListener('click', trocarEmail);