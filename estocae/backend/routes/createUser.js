
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let sequelize = require('../src/db/sequelize')
let Usuario = require('../models/Usuario'); 
let EnvioDeEmail = require('../models/EnvioDeEmail'); 

let ValidationCreateUser = require('./src/ValidationsCreateUser.js');

router.put('/', async (req, res)=>{
    const { nome,sobrenome, email, empresa, senha, confirmarSenha } = req.body; 

    console.log("dados fora do Try (cr`ateUser.js)", nome, email, empresa, senha, confirmarSenha)
    try{
        new ValidationCreateUser(nome,sobrenome, email, empresa, senha, confirmarSenha);
        
        
        //Compara se as senhas enviadas são iguais. Se True executa o que está dentro
        if (senha == confirmarSenha){
            
            //(01HASH) Cria as variavies das senhasHash
            const senhaHash = await bcrypt.hash(senha, 10);
            const confirmarSenhaHash = await bcrypt.hash(confirmarSenha, 10);
            //(01HASH) end

            //verificações antes de ADC usuario no DB
            //(ini-email)Verificando se o email já existe [Acho que é possivel fazer isso no ValidationsCreateUser]
            const usuarios = await Usuario.findAll({
                where:{
                    email: email
                }
            });
            if (usuarios.length > 0) {//Caso a variavel tenha algum valor, siignifica que esse usuario já existe e retornar o error 400
                return res.status(400).send('Email já cadastrado. Tente outro!');
            }
            //(fim-email)

            const t = await sequelize.transaction();
            try {
                const newUser = await Usuario.create({
                    "nome":nome,
                    "sobrenome":sobrenome, 
                    "email":email,
                    "empresa": empresa,
                    "senha": senhaHash
                },
                {
                    transaction: t
                })
                    if(newUser instanceof Usuario){
                        
                        let id = newUser.id
                        let emailUser = newUser.email
                        console.log(id);
                        const emailConfirmation = await EnvioDeEmail.create({
                            "usuario":id, 
                            "email":emailUser
                        },{
                            transaction: t
                        })
                    } else {
                        throw new Error("Usuario nao criado.")
                    }

            await t.commit();
            res.status(200).send("Usuario Criado com sucesso!");
            }catch(error){
                await t.rollback()
                res.status(400).send("Erro ao criar usuario, Transaction error  ! "+error)
            }
            

        } else{
            res.status(400).send("As senhas não são iguais!");}
        //console.log(validarSenha)
        //res.status(200).send("done");
    } catch(error){
        console.log(req.body);
        res.status(400).send(error.message);
    }
});
module.exports = router;
