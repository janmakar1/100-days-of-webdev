const Product = require("../models/product.model");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.render("admin/products/all-products", { products: products });
  } catch (error) {
    next(error);
    return;
  }
}

function getNewProduct(req, res) {
  res.render("admin/products/new-product");
}

function createNewProduct(req, res) {
  console.log(req.body);
  console.log(req.file);

  const product = new Product({
    ...req.body,
    image: req.file.filename,
  });

  try {
    product.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect("/admin/products");
}

module.exports = {
  getProducts: getProducts,
  getNewProduct: getNewProduct,
  createNewProduct: createNewProduct,
};
