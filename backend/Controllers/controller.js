// controller.js

const {
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
    allAccessoriesModel,
} = require("../Modals/models");


async function getMobiles(req, res) {
  try {
    const dbName = req.params.dbName;
    const collectionName = "mobiles";
    if (!dbName) {
      res.status(400).json({ error: "dbName is required" });
      return;
    }
    const mobiles = await mobileModel.getAll(dbName, collectionName);
    res.json(mobiles);
    } catch (error) {
        console.error("Error getting mobiles:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getLaptops(req, res) {
    try {
        const dbName = req.params.dbName;
        const collectionName = "laptops";
        const laptops = await laptopModel.getAll(dbName, collectionName);
        res.json(laptops);
    } catch (error) {
        console.error("Error getting laptops:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getWatches(req, res) {
    try {
        const dbName = req.params.dbName;
        const collectionName = "watches";
        const watches = await watchModel.getAll(dbName,collectionName);
        res.json(watches);
    } catch (error) {
        console.error("Error getting watches:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getTablets(req, res) {
    try {
        const dbName = req.params.dbName;
        const collectionName = "tablets";
        const tablets = await tabletModel.getAll(dbName, collectionName);
        res.json(tablets);
    } catch (error) {
        console.error("Error getting tablets:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getAccessories(req, res) {
    try {
        const dbName = req.params.dbName;
        console.log("dbName:" + dbName);
        const collectionName = "accessories";

        if (dbName === "Priceoye") {
            getPriceoyeAccessories(req, res);
            return;
        }
        const accessories = await accessoriesModel.getAll(dbName, collectionName);
        res.json(accessories);
    } catch (error) {
        console.error("Error getting accessories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


async function getPriceoyeAccessories(req, res) {
    try {
        const dbName = req.params.dbName;
        const accessories = await priceoyeAccessoriesModel.getAll(dbName);
        res.json({ accessories });
      } catch (error) {
        console.error('Error getting accessories:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};


async function getAllMobiles(req, res) {
    try {
        const mobiles = await allMobilesModel.getAll();
        res.json(mobiles);
    } catch (error) {
        console.error("Error getting mobiles:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function getAllLaptops(req, res) {
    try {
        const laptops = await allLaptopsModel.getAll();
        res.json(laptops);
    } catch (error) {
        console.error("Error getting laptops:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function getAllWatches(req, res) {
    try {
        const watches = await allWatchesModel.getAll();
        res.json(watches);
    } catch (error) {
        console.error("Error getting watches:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function getAllTablets(req, res) {
    try {
        const tablets = await allTabletsModel.getAll();
        res.json(tablets);
    } catch (error) {
        console.error("Error getting tablets:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function getAllAccessories(req, res) {
    try {
        const accessories = await allAccessoriesModel.getAll();
        res.json(accessories);
    } catch (error) {
        console.error("Error getting accessories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};





module.exports = {
    getMobiles,
    getLaptops,
    getWatches,
    getTablets,
    getAccessories,
    getAllMobiles,
    getAllLaptops,
    getAllWatches,
    getAllTablets,
    getAllAccessories,
    
};
