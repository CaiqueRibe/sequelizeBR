const Sequelize = require("sequelize") // Classe

const sequelize = new Sequelize("sequelize", "root", "root", {
   dialect: "mysql",
   host: "localhost",
   port: 3306,
}) // Instancia // Construtor da classe

sequelize
   .authenticate()
   .then(() => {
      console.log("Connection has been established successfully.")
   })
   .catch((err) => {
      console.error("Unable to connect to the database:", err)
   })

module.exports = sequelize
