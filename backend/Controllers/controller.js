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
    shophiveMobilesModel,
    shophiveLaptopsModel,
    shophiveWatchesModel,
    qmartMobilesModel,
} = require("../Modals/models");


async function getMobiles(req, res) {
  try {
    const dbName = req.params.dbName;
    const collectionName = "mobiles";
    if (!dbName) {
      res.status(400).json({ error: "dbName is required" });
      return;
    }

    if (dbName === "Shophive") {
        getShophiveMobiles(req, res);
        return;
    }
    if (dbName === "Qmart") {
        getQmartMobiles(req, res);
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

        if (dbName === "Shophive") {
            getShophiveLaptops(req, res);
            return;
        }


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

        if (dbName === "Shophive") {
            getShophiveWatches(req, res);
            return;
        }

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

async function getQmartMobiles(req, res) {
    try {
        const dbName = req.params.dbName;
        const mobiles = await qmartMobilesModel.getAll(dbName);
        res.json({ mobiles });
        } catch (error) {
            console.error("Error getting mobiles:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};

async function getShophiveMobiles(req, res) {
    try {
        const dbName = req.params.dbName;
        const mobiles = await shophiveMobilesModel.getAll(dbName);
        res.json({ mobiles });
        } catch (error) {
            console.error("Error getting mobiles:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};

async function getShophiveLaptops(req, res) {
    try {
        const dbName = req.params.dbName;
        const laptops = await shophiveLaptopsModel.getAll(dbName);
        res.json({ laptops });
        } catch (error) {
            console.error("Error getting laptops:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};

async function getShophiveWatches(req, res) {
    try {
        const dbName = req.params.dbName;
        const watches = await shophiveWatchesModel.getAll(dbName);
        res.json({ watches });
        } catch (error) {
            console.error("Error getting watches:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
};


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

async function getProductDetails(req, res) {
    try {
      const dbName = req.params.dbName;
      const collectionName = req.params.collectionName;
      const productId = req.params.productId;
  
      if (!dbName) {
        return res.status(400).json({ error: "dbName is required" });
      }
  
      if (!productId) {
        return res.status(400).json({ error: "productId is required" });
      }
  
      const productDetails = await mobileModel.getDetails(dbName, collectionName, productId);
  
      if (!productDetails) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(productDetails);
    } catch (error) {
      console.error('Error getting product details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }





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
    getProductDetails,

    
};
