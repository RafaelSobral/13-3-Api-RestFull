
const ProductsModel = require('../models/products')


async function get(req, res) {
  const { id } = req.params
  const obj = id ? { _id: id } : null
  const products = await ProductsModel.find(obj)

  res.send(products)
}

async function post(req, res) {
  const {
    name,
    brand,
    price,
  } = req.body

  const products = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()
  res.send()
}
// ======= TESTE DE ROTA 
// function get(req, res) {
//   res.send({
//     Ok: true
//   })
// }

module.exports = { get, post, }