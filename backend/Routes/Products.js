const express = require('express')
const router = express.Router()

const {getMobiles, getLaptops, getTablets, getAccessories, getWatches } = require('../Controllers/Products')

// GET  api/productRoute/status/
router.get('/status',(req,res) => {
    res.status(200).send("App Status : Working (Product)")
})

// GET  api/productRoute/getMobiles/
router.get('/getMobiles', async (req,res) => {
    const mobiles = await getMobiles(req,res)
    // res.status(200).send(mobiles)
})


// GET  api/productRoute/getLaptops/
router.get('/getLaptops', async (req,res) => {
    const laptops = await getLaptops(req,res)
})

// GET  api/productRoute/getTablets/
router.get('/getTablets', async (req,res) => {
    const tablets = await getTablets(req,res)
})

// GET  api/productRoute/getAccessories/
router.get('/getAccessories', async (req,res) => {
    const accessories = await getAccessories(req,res)
})

// GET  api/productRoute/getWatches/
router.get('/getWatches', async (req,res) => {
    const watches = await getWatches(req,res)
})



module.exports = router




