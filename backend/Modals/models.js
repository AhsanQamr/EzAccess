
const {ObjectId} = require('mongodb');
const { getDBConnection } = require('../db');

const productModel = {
    getCategoryWise: async (category) => {
      const client = getDBConnection('EzAccess');
      if (!client) {
        throw new Error('Database connection not established');
      }
  
      const products = await client
        .db()
        .collection('products')
        .find({ category })
        .toArray();
  
      return products;
    },

    getSourceWise: async (source) => {
        const client = getDBConnection('EzAccess');
        if (!client) {
            throw new Error('Database connection not established');
        }
    
        const products = await client
            .db()
            .collection('products')
            .find({ source })
            .toArray();
    
        return products;
    },

    getOneProduct: async (productId) => {
        const client = getDBConnection('EzAccess');
        if (!client) {
            throw new Error('Database connection not established');
        }
    
        const product = await client
            .db()
            .collection('products')
            .findOne({ _id: new ObjectId(productId) });
    
        return product;
    },

    getCategoryWithSource : async (source, category) => {
        const client = getDBConnection('EzAccess');
        if (!client) {
            throw new Error('Database connection not established');
        }
    
        const products = await client
            .db()
            .collection('products')
            .find({ source, category })
            .toArray();
    
        return products;
    }


  };


  module.exports = {
    productModel,
  }