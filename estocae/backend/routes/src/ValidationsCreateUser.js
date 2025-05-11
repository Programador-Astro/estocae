const { or } = require("sequelize");
const { checkout } = require("../login");
const simbolosProibidosArray = "' \" ; -- \\ > < = ! ( ) AND OR UNION JOIN $ # @ & * ? ~ | ^ . , : / % [ ] { } ` espaço tabulação quebra de linha e outros caracteres de controle. Prefira uma lista de permissão (letras, números, _ e -) e use validação e prepared statements.".split(' ');
const caracteresProibidosArray = ["'", "\"", ";", "\\", ">", "<", "=", "!", "(", ")"];
const simbolosProibidosString = "";

class ValidationsCreateUser {
    constructor(nome,sobrenome, email, empresa, senha, confirmarSenha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.empresa = empresa;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha
        this.validar();
    }
    validar(){
        this.validarNome();
        this.validarSobrenome();
        this.validarEmail();
        this.validarEmpresa();
        this.validarSenha();
        this.validarConfirmarSenha();
    }
    validarNome() {
        if (!this.nome) {
            throw new Error('Nome é obrigatório');
        }
        const tratar_nome = !this.nome.includes('@')
        if(tratar_nome == true){
            console.log(tratar_nome,'debug validatorcreateuser -----------------------')
            //throw new Error('Esté simbolo não é permitido!');
        }
    }
    validarSobrenome(){
        if (!this.sobrenome) {
            throw new Error('Sobrenome é obrigatório');
        }
    }
    validarEmail() {
        if (!this.email) {
            throw new Error('Email é obrigatório');
        }
        if (!this.email.includes('@')) {
            throw new Error('Email inválido');
        }
    }
    validarEmpresa(){
        if(!this.empresa){
            throw new Error("Empresa é obrigatória.")
        }
    }
    validarSenha(){
        let checkPassword = true;
        if(!this.senha){
            throw new Error("Password inválido.");   
        }
        if(!this.senha.length > 8){
            checkPassword = false;
        }
        if(!/[0-9]/.test(this.senha) || !/[a-zA-Z]/.test(this.senha)){
            checkPassword = false;
        }
        if(!checkPassword) {
            throw new Error("Password inválido.");   
        }
    }
    validarConfirmarSenha(){
        let checkPassword = true;
        if(!this.confirmarSenha){
            throw new Error("Password inválido.");   
        }
        if(!this.confirmarSenha.length > 8){
            checkPassword = false;
        }
        if(!/[0-9]/.test(this.confirmarSenha) || !/[a-zA-Z]/.test(this.confirmarSenha)){
            checkPassword = false;
        }
        if(!checkPassword) {
            throw new Error("Password inválido.");   
        }
    }
}
module.exports =  ValidationsCreateUser;
 