// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');
const {signup, login} = require('../Controllers/AuthControllers')
const {requireAuth} = require('../Middleware/Auth')


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

// post for search route


// route for product details
router.get('/:dbName/:collectionName/:productId', controller.getProductDetails);

router.post('/signup', signup)

router.post('/login', login)

router.get('/auth', requireAuth, (req,res) => {
    res.status(200).send({message: 'Authorized'})
});


module.exports = router;
