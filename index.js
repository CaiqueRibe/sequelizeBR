// IIFE = Immediately Invoked Function Expression
// Anonymous Self-Executing Function
// Funcao imeddiatamente invocada

;(async () => {
   const database = require("./db.js")
   const Produto = require("./produto.js")
   await database.sync() // verifica modelos que tem no projeto e syncroniza com as tabelas no banco de dados

   // do stuff in db without SQL

   //    const novoProduto = await Produto.create({
   //       nome: "Produto 1",
   //       preco: 10,
   //       descricao: "Descricao do produto 1",
   //    })
   //    console.log("Created", novoProduto)

   const novoProduto = await Produto.create({
      nome: "Teclado USB",
      preco: 30,
      descricao: "Teclado Bacana",
   })
   console.log("Created", novoProduto)

   const produtos = await Produto.findAll()
   console.log(produtos)

   const produto1 = await Produto.findByPk(1)
   console.log(produto1)

   // const produto2 = await Produto.findByOne()
   // console.log(produto2)

   // const produto3 = await Produto.findAll({ where: { nome: "Teclado USB" } })
   // console.log(produto3)

   // const produtoEdit = await Produto.findByPk(1)
   // produtoEdit.nome = "Fiz Uma Alteracao"
   // console.log(produto1)
   // await produtoEdit.save()

   // const produtoDelete = await Produto.findByPk(1)
   // await produtoDelete.destroy()

   // await Produto.destroy({ where: { preco: 30 } })
})()

// em realcao ao sync
// base de dados que ja existir, tabelas ele cria
