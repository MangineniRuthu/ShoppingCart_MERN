require("dotenv").config();
//const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const axios = require("axios");

connectDB();

const importData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const apiData = response.data;

  try {
    productsData = apiData.map((item) => ({
      name: item.title,
      imageUrl: item.image,
      description: item.description,
      price: item.price,
      countInStock: Math.floor(Math.random() * 20) + 5,
    }));
    await Product.deleteMany();
    await Product.insertMany(productsData);
    console.log("Data Import Success");
  } catch (error) {
    console.error("Error with Data Import");
    process.exit(1);
  }
};

importData();
