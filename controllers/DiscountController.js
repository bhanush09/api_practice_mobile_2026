const Mobile = require('../models/Mobile')
const Discount = require ('../models/Discount')
async function getMobiles(req,res) {
    try{

        let mobiles = await Mobile.find({},{_id:1, brandName:1}) // inmongoDB
        console.log(mobiles)
        res.status(200).send({data: mobiles})

    }catch(err){
        console.log(err)
        res.status(400).send({message:'something went wrong'})
    }
}
async function addDiscount(req , res){
    try{
        console.log(req.body)
        let discount = new Discount(req.body)
        await discount.save();
        res.status(200).send({message:'Discount Added'})
    }catch(err){
        console.log(err)
        res.status(400).send({message:'Something went wrong'})
    }
}
module.exports = {
    getMobiles,
    addDiscount
}