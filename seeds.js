/** @format */

const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/flippingTracker")
  .then(() => {
    console.log("MONGO connection open!".toUpperCase());
    console.log("IM IN THE SEED.JS");
  })
  .catch((err) => {
    console.log("ERROR w/ mongoose connection!".toUpperCase());
    console.log(err.message);
  });

// const p = new Product({
//   name: "Ruby Red Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log("PRODUCT INSERT ERROR");
//     console.log(err.message);
//   });

const seedProducts = [
  {
    name: "LL Bean Shirt",
    price: 1,
    category: "ebay",
  },
  {
    name: "2 piece Sectional",
    price: 50,
    category: "furniture",
  },
  {
    name: "Gucci Flip Flops",
    price: 200,
    category: "ebay",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
