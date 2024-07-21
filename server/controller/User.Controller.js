const UserModel = require("../model/User.Model");

const AddAdminController =async(req,res)=>{
    const {userName,email,Password} = req.body;

    const user = UserModel({userName,email,Password});
    await user.save();
    try {
        res.status(200).send({
            success:true,
            message:"User Add SuccessFully!",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error while Add User",
            error

        })
    }
}

module.exports = {
    AddAdminController
}