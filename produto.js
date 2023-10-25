const Sequelize = require("sequelize")
const databse = require("./db.js") // importando a instancia do sequelize

const Produto = databse.define("produto", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   nome: {
      type: Sequelize.STRING(150), // limitar caracters em 150 // padrao is 225
      allowNull: false,
   },
   preco: Sequelize.DECIMAL, // como so sera definido o tipo do preco // pode ser definido sem o objeto
   descricao: Sequelize.STRING,
})

module.exports = Produto
