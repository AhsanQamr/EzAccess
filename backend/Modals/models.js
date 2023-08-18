// models.js
function createModel(dbName, collectionName) {
    const connection = require('../db.js').getDBConnection(dbName);
    return connection.db().collection(collectionName);
}

const mobileModel = {
    getAll: async (dbName, collectionName) => {
        const mobiles = await createModel(dbName, collectionName).find({}).toArray();
        return mobiles;
    },

    getDetails: async (dbName, collectionName, productId) => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        
        for (const dbName of databases) {
          const productsCollection = createModel(dbName, collectionName);
          const product = await productsCollection.findOne({ _id: productId });
    
          if (product) {
            return product;
          }
        }
        
        return null;
      },

};

const laptopModel = {
    getAll: async (dbName, collectionName) => {
        const laptops = await createModel(dbName, collectionName).find({}).toArray();
        return laptops;
    }
};

const watchModel = {
    getAll: async (dbName,collectionName) => {
        const watches = await createModel(dbName, collectionName).find({}).toArray();
        return watches;
    }

};

const tabletModel = {
    getAll: async (dbName, collectionName) => {
        const tablets = await createModel(dbName, collectionName).find({}).toArray();
        return tablets;
    }
};

const accessoriesModel = {
    getAll: async (dbName,collectionName) => {
        const accessories = await createModel(dbName, collectionName).find({}).toArray();
        return accessories;
    }
};

const priceoyeAccessoriesModel = {
  getAll: async (dbName) => {
    const earbudsCollection = createModel(dbName, "earbuds");
    const powerbanksCollection = createModel(dbName, "powerbanks");

    // Merge "earbuds" and "powerbanks" collections
    const accessories = await Promise.all([
      earbudsCollection.find({}).toArray(),
      powerbanksCollection.find({}).toArray(),
    ]);

    // Flatten the arrays and return the merged result
    return accessories.flat();
  },
};

const allMobilesModel = {
    getAll: async () => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        const mobiles = [];
    
        for (const dbName of databases) {
          const mobilesCollection = createModel(dbName, 'mobiles');
          const mobilesFromDB = await mobilesCollection.find({}).toArray();
          mobiles.push(...mobilesFromDB);
        }
    
        return mobiles;
    }
}

const allLaptopsModel = {
    getAll: async () => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        const laptops = [];

        for (const dbName of databases) {
            const laptopsCollection = createModel(dbName, 'laptops');
            const laptopsFromDB = await laptopsCollection.find({}).toArray();
            laptops.push(...laptopsFromDB);
        }

        return laptops;
    }
}

const allWatchesModel = {
    getAll: async () => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        const watches = [];

        for (const dbName of databases) {
            const watchesCollection = createModel(dbName, 'watches');
            const watchesFromDB = await watchesCollection.find({}).toArray();
            watches.push(...watchesFromDB);
        }

        return watches;
    }
}

const allTabletsModel = {
    getAll: async () => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        const tablets = [];

        for (const dbName of databases) {
            const tabletsCollection = createModel(dbName, 'tablets');
            const tabletsFromDB = await tabletsCollection.find({}).toArray();
            tablets.push(...tabletsFromDB);
        }

        return tablets;
    }
}

const allAccessoriesModel = {
    getAll: async () => {
        const databases = ['Daraz', 'Priceoye', 'Symbios', 'Shophive', 'Qmart'];
        const accessories = [];

        for (const dbName of databases) {
            const accessoriesCollection = createModel(dbName, 'accessories');
            const accessoriesFromDB = await accessoriesCollection.find({}).toArray();
            accessories.push(...accessoriesFromDB);
        }

        return accessories;
    }
}




module.exports = {
    mobileModel,
    laptopModel,
    watchModel,
    tabletModel,
    accessoriesModel,
    priceoyeAccessoriesModel,
    allMobilesModel,
    allLaptopsModel,
    allWatchesModel,
    allTabletsModel,
    allAccessoriesModel
};
