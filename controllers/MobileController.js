const Mobile = require('../models/Mobile');
const cloudinary = require('cloudinary').v2 
async function addmobile(req,res){
    try{
        cloudinary.config({
            cloud_name: "le6jh3ny",
            api_key: "117511439895217",
            api_secret: "EqQDFj6UQRocqO-AC3D-eybn0T8"
         })
        const upload = await cloudinary.uploader.upload(req.file.path)
        console.log(upload)
        req.body.mobileImage = upload.secure_url;
        console.log(req.body)
        let mobile = new Mobile(req.body)
        await mobile.save();
        console.log('data save successfully......')
        res.status(200).send({message: 'data has been save successfyully'})
    }catch(err){
        res.status(400).send({message: 'something went wrong'})
    }
}
async function getMobiles(req, res){
    try{
        
        let totalMobiles = await Mobile.countDocuments({})
        console.log(totalMobiles, 'totalmobiles')

        let mobiles = await Mobile.find({brandName: new RegExp(req.query.searchMobile,"i")}).skip((req.query.pageNo-1)*(req.query.mobilesPerPage)).limit(req.query.mobilesPerPage);
        res.status(200).send({data: mobiles, totalMobiles: totalMobiles })
    }catch(err){
        console.log(err)
        res.status(400).send({message: 'something went wrong'})
    }
}
async function deleteMobile(req, res) {
    try{
        id= req.params.id;
        await Mobile.deleteOne({_id: id});
        res.status(200).send({success: true})
    }catch(err){
        console.log(err)
        res.status(400).send({success: false})
    }
}
async function getMobileForEdit(req, res) {
    try{
        let id= req.params.id;
        console.log(id);
        let mobile = await Mobile.findOne({_id: id});
        res.status(200).send({data: mobile})

    }catch(err){
        console.log(err)
        res.status(400).send({data: err})
    }
}
async function editMobile(req, res) {
    try{
        let id= req.params.id;
        console.log(id)
        let mobile= req.body;
        console.log(mobile) 
        await Mobile.updateOne({ _id: id}, req.body);
        console.log("Mobile update Sucessfully...")
        res.status(200).send({success: true})
    }catch(err){
        console.log(err)
        res.status(400).send({success:false})
    }
}
module.exports = {
    addmobile,
    getMobiles,
    deleteMobile,
    getMobileForEdit,
    editMobile
}