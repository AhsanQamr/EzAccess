// db.js
const { MongoClient } = require('mongodb');

let client = null;

async function connectDatabase() {
  if (client) {
    return client; // Return the existing connection if it's already established.
  }

  try {
    const uri = 'mongodb://localhost:27017/EzAccess'; // EzAccess database
    client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    console.log('Database connected successfully.');
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // You can choose to handle the error here or let the caller handle it.
  }
}

function getDBConnection() {
  return client;
}

module.exports = {
  connectDatabase,
  getDBConnection,
};

