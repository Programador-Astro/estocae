const { DataTypes } = require('sequelize');
const sequelize = require('../src/db/sequelize'); // importa a conexão

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, 
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Nome da empresa vinculada ao usuário principal',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_confirmado: {
    type: DataTypes.DATE(6),
    allowNull: true,
    comment: 'Caso email for confirmado, data de confirmação.',
  },
},{timestamps: false});

module.exports = Usuario;
