

function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = { registro: [] }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirContato() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strUsuario = document.getElementById('usuario').value;
    let strEmail = document.getElementById('email').value;
    let strSenha = document.getElementById('senha').value;
    if (strUsuario != "" && strEmail != "" && strSenha != "") {
        let novoRegistro = {
            nome: strUsuario,
            email: strEmail,
            senha: strSenha
        }
        let testeUser = JSON.stringify(objDados);
        console.log(testeUser.match(strEmail))
        if (testeUser.match(strUsuario) == null && testeUser.match(strEmail) == null) {
            objDados.registro.push(novoRegistro);
            linkLogin();
        } else {
            if (testeUser.match(strUsuario) != null && testeUser.match(strEmail) != null) {
                alert('Usuário/Email existentes')
            } else if (testeUser.match(strUsuario) != null) {
                alert("Usuário existente")

            } else if (testeUser.match(strEmail) != null) {
                alert("Email existente")
            }


        }

    } else {

        return;
    }
    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
    document.getElementById('usuario').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';



}
function linkLogin() {
    window.location.assign("../loginDIW/login.html");
}


// Configura os botões

document.getElementById('button-registrar').addEventListener('click', incluirContato);

