import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true },
    role: {type: String, enum: ["owner", "user"], default: 'user' },
    image: {type: String, default: ''},
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User

// enumm is used to define the possible values for the role field
// default is used to set the default value for the role field
// timestamps is used to add when user is  createdAt and updatedAt fields to the schema

