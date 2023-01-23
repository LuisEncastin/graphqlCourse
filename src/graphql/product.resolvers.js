const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async(_, {id}) => {
  const product = await service.findOne(id);
  return product;
}

const getProducts = async() => {
  const products = await service.find({});
  return products;
}

const addProduct = (_, {dto}) => {
  //Si necesitas resolver algo antes, ahí es cuando haces un await en el servicio
  return service.create(dto);
}

const updateProduct = (_, {id, dto}) => {
  return service.update(id,dto);
}

const deleteProduct = async(_, {id}) => {
  await service.delete(id);
  return id;
}

const getProductsByCategory = (parent) => {
  console.log(parent);
  const id = parent.dataValues.id
  return service.getByCategory(id);
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory };
