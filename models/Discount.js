const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const discountSchema = new Schema({
    mobile:{type:mongoose.Schema.Types.ObjectId , ref: 'Mobile' , required: true},
    discountName: {type: String, required: true},
    discountType:{type: String, default:'Percentage', enum:['Percentage', 'Fixed']},
    discountValue: {type: Number, default:0 ,required: true},
    validFrom: {type: Date , required: true},
    validTo: {type: Date , required: true},

},{timestamps: true })
module.exports = mongoose.model('Discount', discountSchema)
