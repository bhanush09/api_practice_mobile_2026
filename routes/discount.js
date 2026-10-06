const express = require('express')
const DiscountController = require('../controllers/DiscountController')
const router = express.Router()
router.get('/mobiles/for/discount',(req, res) => {
    DiscountController.getMobiles(req, res)
})
router.post('/add/discount', (req, res) => {
    DiscountController.addDiscount(req, res)
})

module.exports = router