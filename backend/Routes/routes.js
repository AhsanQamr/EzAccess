// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');


router.get('/:dbName/mobiles', controller.getMobiles);
router.get('/:dbName/laptops', controller.getLaptops);
router.get('/:dbName/watches', controller.getWatches);
router.get('/:dbName/tablets', controller.getTablets);
router.get('/:dbName/accessories', controller.getAccessories);

// routes for all products

router.get('/mobiles', controller.getAllMobiles);
router.get('/laptops', controller.getAllLaptops);
router.get('/watches', controller.getAllWatches);
router.get('/tablets', controller.getAllTablets);
router.get('/accessories', controller.getAllAccessories);


// route for product details
router.get('/:dbName/:collectionName/:productId', controller.getProductDetails);


module.exports = router;
