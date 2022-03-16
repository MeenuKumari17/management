import express, {Router} from "express";
import User from "../model/User.js";

const route = express.Router();

// create user

route.post("", async (req, res) =>
{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    try {
        console.log(`user ${user}`);
        const existingUser = await User.findOne({phone: user.phone});
        console.log(`existingUser ${existingUser}`);
        if(existingUser===null){
            const savedUser = await user.save();
            res.status(200).json(savedUser);
        }
        else {
            res.status(409).json("mobile number already exist");
        }
        
    } catch (error) {
    console.log(error);
    res.status(500).json("internal server error");       
    }
}
);

// list user
route.get("", async (req, res)=>{ 
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get single user by phone number
route.get("/:phone", async(req, res) => {
    try {
        const user = await User.findOne({phone: req.params.phone});
        if(user!==null){
            res.status(200).json(user);
        }
        else{
            res.status(400).json("User Not Found");
        }
        
    } catch (error) {
        res.status(500).json("internal server error");
    }

});

export default route;