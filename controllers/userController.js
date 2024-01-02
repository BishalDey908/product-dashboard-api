const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    //check if user already exist or not
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User is already exists" });
    }
    //user object
    const userInfo = new User(req.body);
    userInfo.password = await bcrypt.hash(password, 10);
    await userInfo.save();
    return res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req,res)=>{
    try{ 
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(401)
            .json({message:"Auth fail Unauthorized User"});
        }
        //check password
        const isPassMatch = await bcrypt.compare(password,user.password)
        if(!isPassMatch){
            return res.status(401)
            .json({message:'Auth fail Invalid Email Or Password'})
        }

        const userObject = {
            email,
            name: user.name,
            _id: user._id
        }

        const jwtToken = jwt.sign(userObject,process.env.JWT_SECRET,{
            expiresIn: "4h"
        })

        userObject.jstToken = jwtToken
        res.status(200)
        .json({message:"success",data:userObject})

    }catch(err){
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
  registerUser,
  loginUser
};
