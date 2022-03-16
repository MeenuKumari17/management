import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type: "string",
        required: true
    },
    email:{
        type: "string",
        required: true,
    },
    address: {
        type : "string",
        required: true,
    },
    phone: {
        type: "string",
        required: true,
        unique: true
    },
},{timestamps: true});

const user = mongoose.model('User', UserSchema);

export default user;