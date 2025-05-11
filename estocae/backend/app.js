var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cron = require('node-cron');
const cors = require('cors');

var sequelize = require('./src/db/sequelize'); 

// define de onde pode ser requisitada(Front-end)
const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://www.thunderclient.com'];

const corsOptions = {

  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) { // !origin allows requests from same origin (backend)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Especifica os métodos HTTP permitidos
  credentials: true, // Se você precisar lidar com cookies em cross-origin requests
  allowedHeaders: 'Content-Type,Authorization' // Exemplo de headers permitidos
};

// Importa os models (exemplo com Usuario)
var Usuario = require('./models/Usuario'); // adapte conforme seus models
var EnvioDeEmail = require('./models/EnvioDeEmail'); // adapte conforme seus models

var loginRouter = require('./routes/login')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createUserRouter = require('./routes/createUser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

//Determinando a origem
app.use(cors(corsOptions))
app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
}
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// cron

cron.schedule('* * * * * *', () => {
  //console.log('Executando tarefa a cada segundo');
});
// Rotas
app.use('/', loginRouter);
app.use('/register', createUserRouter);
app.use('/1', indexRouter);
app.use('/users', usersRouter);

// Testa a conexão com o banco e sincroniza os models
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao MySQL com sucesso! (app.js)');
    return sequelize.sync({ force: true }); // Sincroniza tabelas
  })
  .then(() => {
    console.log('Models sincronizados! (app.js)');
  })
  .catch((err) => {
    console.error('Erro ao conectar/sincronizar com o banco:', err);
    setTimeout(() => {
      sequelize.authenticate()
        .then(() => {
          console.log('Conectado ao MySQL com sucesso! (app.js)');
          return sequelize.sync({ force: true }); // Sincroniza tabelas
        })
        .then(() => {
          console.log('Models sincronizados! (app.js)');

        })
        .catch((err) => {
          console.error('Erro ao reconectar/sincronizar com o banco:', err);
        });
    }, 5000);
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
