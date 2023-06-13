const Product = require('../Modals/Products');


const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb://localhost:27017/Daraz'; // Replace with your MongoDB connection string


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getMobiles(req,res) {
  try {
    await client.connect();
    const collection = client.db().collection('mobiles');
    const mobiles = await collection.find({}).toArray();
    res.json(mobiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



async function getLaptops(req,res) {
  try {
    await client.connect();
    const collection = client.db().collection('laptops');
    const laptops = await collection.find({}).toArray();
    res.json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } 
}

async function getTablets(req,res) {
  try {
    await client.connect();
    const collection = client.db().collection('tablets');
    const tablets = await collection.find({}).toArray();
    res.json(tablets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } 
}

async function getAccessories(req,res) {
  try {
    await client.connect();
    const collection = client.db().collection('accessories');
    const accessories = await collection.find({}).toArray();
    res.json(accessories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } 
}

async function getWatches(req,res) {
  try {
    await client.connect();
    const collection = client.db().collection('watches');
    const watches = await collection.find({}).toArray();
    res.json(watches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } 
}


module.exports = {  getMobiles, getLaptops, getTablets, getAccessories, getWatches }

