const { ObjectId } = require("mongodb");
const { getDBConnection } = require("../db");


const productModel = {
  getCategoryWise: async (category) => {
    const client = getDBConnection("EzAccess");
    if (!client) {
      throw new Error("Database connection not established");
    }

    const products = await client
      .db()
      .collection("products")
      .find({ category })
      .toArray();

    return products;
  },

  getSourceWise: async (source) => {
    const client = getDBConnection("EzAccess");
    if (!client) {
      throw new Error("Database connection not established");
    }

    const products = await client
      .db()
      .collection("products")
      .find({ source })
      .toArray();

    return products;
  },

  getOneProduct: async (productId) => {
    const client = getDBConnection("EzAccess");
    if (!client) {
      throw new Error("Database connection not established");
    }

    const product = await client
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    return product;
  },

  getCategoryWithSource: async (source, category) => {
    const client = getDBConnection("EzAccess");
    if (!client) {
      throw new Error("Database connection not established");
    }

    const products = await client
      .db()
      .collection("products")
      .find({ source, category })
      .toArray();

    return products;
  },

  // make fucntion search product to search products using "productName" given the query
  // Assuming 'client' is an instance of MongoClient from MongoDB Atlas
  searchAllProducts: async (query) => {
    const client = getDBConnection('EzAccess');
    if (!client) {
        throw new Error('Database connection not established');
    }

    // Escape special characters in the query
    const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regexQuery = new RegExp(escapedQuery, 'i');

    const products = await client
        .db()
        .collection('products')
        .find({ productName: { $regex: regexQuery } })
        .toArray();

    return products;
},


  searchProductsCategoryWise: async (query, source) => {
    const client = getDBConnection("EzAccess");
    if (!client) {
      throw new Error("Database connection not established");
    }

    const regexQuery = new RegExp(query, "i"); // 'i' option for case-insensitive search

    const queryCondition = {
      productName: { $regex: regexQuery },
    };

    if (source) {
      queryCondition.source = source; // Add source condition if provided
    }

    const products = await client
      .db()
      .collection("products")
      .find(queryCondition)
      .toArray();

    return products;
  },
};

module.exports = {
  productModel,
};


// searchAllProducts: async (query) => {
//     const client = getDBConnection('EzAccess');
//     if (!client) {
//         throw new Error('Database connection not established');
//     }

//     const regexQuery = new RegExp(query, 'i'); // 'i' option for case-insensitive search

//     const products = await client
//         .db()
//         .collection('products')
//         .find({ productName: { $regex: regexQuery } })
//         .toArray();

//     return products;
// },