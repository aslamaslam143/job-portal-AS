import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },      
    email: {
        type: String,
        required: true,
        unique: true
    },
    resume: {    
        type: String
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });  // Optional: adds createdAt and updatedAt fields

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
