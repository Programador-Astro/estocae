var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario'); 


/* Pagina de login. */
router.post('/', async function(req, res) {
  try{
    const user = await Usuario.findOne({
      where:{
        email: req.body.email
      }
    });
    var resposta = "Usuario NÃO encontrado";
    if(user){
      console.log(user.id)
      id = user.id
      resposta = user;
    } 
    res.send(resposta);
  }
  catch (error) {
  console.error('Erro ao buscar usuário:', error);
  res.status(404).send('Erro ao buscar usuário no banco de dados.');
}
});

module.exports = router;
