const express = require("express");
var methodOverride = require('method-override');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./product");
const { urlencoded } = require("express");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Can not connect to Database");
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(urlencoded({extended:true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
  const products = await Product.find({ category });
  res.render('products/index', {products, category});
  } else {
  const products = await Product.find({});
  res.render('products/index', {products, category: 'All'});
  }
});

app.get("/products/new", (req, res) => {
  res.render('products/new', { categories });
});

app.post("/products", async (req,res) =>{
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`)
})

app.get("/products/:id", async (req,res) => {
   const { id } = req.params;
   const product = await Product.findById(id);
   res.render('products/show', {product});
});

app.get("/products/:id/edit", async (req,res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', {product, categories});
});

app.put("/products/:id", async (req,res) => {
  const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new: true});
  res.redirect(`/products/${product._id}`);
})

app.delete("/products/:id", async (req,res) => {
  const {id} = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
})

app.listen(3000, () => {
  
  console.log("Listening on port 3000");
});
