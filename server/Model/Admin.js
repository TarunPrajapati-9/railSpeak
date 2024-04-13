import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Admin', AdminSchema, 'Admin')   