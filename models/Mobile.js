const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mobileSchema = new Schema({
    brandName: { type: String},
    modelName: { type: String},
    price: { type: Number},
    ImeiNo: { type: Number},
    Mfg: { type: String},
    mobileImage: { type: String}
})
module.exports = mongoose.model('Mobile', mobileSchema)