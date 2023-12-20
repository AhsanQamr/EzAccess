// controller.js

const { productModel } = require("../Modals/models");

async function getAllCategoryProducts(req, res) {
  try {
    const category = req.params.category; // Assuming you pass the category in the request parameters
    if (!category) {
      res.status(400).json({ error: "category is required" });
      return;
    }
    const mobiles = await productModel.getCategoryWise(category);
    res.json(mobiles);
  } catch (error) {
    console.error("Error getting mobiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllSourceProducts(req, res) {
  try {
    const source = req.params.source; // Assuming you pass the source in the request parameters
    if (!source) {
      res.status(400).json({ error: "source is required" });
      return;
    }
    const mobiles = await productModel.getSourceWise(source);
    res.json(mobiles);
  } catch (error) {
    console.error("Error getting mobiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getOneProduct(req, res) {
  try {
    const productId = req.params.productId; // Assuming you pass the productId in the request parameters
    if (!productId) {
      res.status(400).json({ error: "productId is required" });
      return;
    }
    const mobiles = await productModel.getOneProduct(productId);
    res.json(mobiles);
  } catch (error) {
    console.error("Error getting mobiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getCategoryWithSource(req, res) {
    try {
        const source = req.params.source; // Assuming you pass the source in the request parameters
        const category = req.params.category; // Assuming you pass the category in the request parameters
        if (!source) {
        res.status(400).json({ error: "source is required" });
        return;
        }
        if (!category) {
        res.status(400).json({ error: "category is required" });
        return;
        }
        const mobiles = await productModel.getCategoryWithSource(source, category);
        res.json(mobiles);
    } catch (error) {
        console.error("Error getting mobiles:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function searchAllProducts(req, res) {
  try {
    const searchQuery = req.params.searchQuery; // Assuming you pass the searchQuery in the request parameters
    if (!searchQuery) {
      res.status(400).json({ error: "searchQuery is required" });
      return;
    }
    const mobiles = await productModel.searchAllProducts(searchQuery);
    res.json(mobiles);
  } catch (error) {
    console.error("Error getting mobiles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function searchProductsCategoryWise(req, res){
    try {
        const searchQuery = req.params.searchQuery; // Assuming you pass the searchQuery in the request parameters
        const source = req.params.source; // Assuming you pass the source in the request parameters
        if (!searchQuery) {
        res.status(400).json({ error: "searchQuery is required" });
        return;
        }
        if (!source) {
        res.status(400).json({ error: "source is required" });
        return;
        }
        const mobiles = await productModel.searchProductsCategoryWise(searchQuery, source);
        res.json(mobiles);
    } catch (error) {
        console.error("Error getting mobiles:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getAllProducts(req, res){
    try {
        const mobiles = await productModel.getAllProducts();
        res.json(mobiles);
    } catch (error) {
        console.error("Error getting mobiles:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



module.exports = {
  getAllCategoryProducts,
  getAllSourceProducts,
  getOneProduct,
  getCategoryWithSource,
  searchAllProducts,
  searchProductsCategoryWise,
  getAllProducts
};
