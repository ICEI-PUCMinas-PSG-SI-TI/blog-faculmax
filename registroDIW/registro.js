

function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { registro: [ 
                        {nome: "João da Silva", email: "gdavi@google.com", senha: "123"}, 
                        {nome: "Maria das Graças", email: "ggu@google.com", senha: "142"}, 
                        {nome: "Pedro Gomes", email: "gbren@google.com", senha: "976"} 
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strUsuario = document.getElementById ('usuario').value;
    let strEmail = document.getElementById ('email').value;
    let strSenha = document.getElementById('senha').value;
    if(strUsuario != "" && strEmail != "" && strSenha != ""){
    let novoRegistro = {
        nome: strUsuario,
        email: strEmail,
        senha: strSenha
    }
    objDados.registro.push (novoRegistro);
}else{
    
    return;
}
    // Salvar os dados no localStorage novamente
    salvaDados (objDados);
    document.getElementById ('usuario').value = '';
    document.getElementById ('email').value='';
    document.getElementById('senha').value='';
    
    linkLogin();
    
}
function linkLogin(){
    window.location.assign("../loginDIW/login.html");
}


// Configura os botões

document.getElementById ('button-registrar').addEventListener ('click', incluirContato,linkLogin);

