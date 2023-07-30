// db.js
const { MongoClient } = require('mongodb');

const databases = {
  Daraz: 'mongodb://localhost:27017/Daraz',
  Priceoye: 'mongodb://localhost:27017/priceoye',
  Symbios: 'mongodb://localhost:27017/Symbios',
  Shophive: 'mongodb://localhost:27017/Shophive',
  Qmart: 'mongodb://localhost:27017/Qmart',
};

const connections = {};

async function connectDatabases() {
  try {
    for (const dbName in databases) {
      const uri = databases[dbName];
      const client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      connections[dbName] = client;
    }
    console.log('All databases connected successfully.');
  } catch (error) {
    console.error('Error connecting databases:', error);
  }
}

function getDBConnection(dbName) {
  return connections[dbName];
}

module.exports = {
  connectDatabases,
  getDBConnection,
};
