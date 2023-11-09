// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');

router.get('/categories/:category', controller.getAllCategoryProducts);
router.get('/sources/:source', controller.getAllSourceProducts);
router.get('/products/:productId', controller.getOneProduct);
router.get('/categories/:category/sources/:source', controller.getCategoryWithSource);

module.exports = router;

