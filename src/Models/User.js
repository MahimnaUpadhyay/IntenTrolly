import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    Username:{
        type: String
    },
    Password:{
        type: String
    },
    Email:{
        type: String
    }
})

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel