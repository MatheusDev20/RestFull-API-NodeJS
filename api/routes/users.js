const express = require('express')

const router = express.Router()

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling Get / products'
    })
})
router.post('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handling Post / products'
    })
})
router.get('/:productId', (req,res,next)=> {
    const id = req.params.productId
    if(id === 'special'){
        res.status(200).json({
            message: 'Handling productID request'
        })
    } else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})
router.patch('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Uptaded Product'
    })
})
router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
})
module.exports = router