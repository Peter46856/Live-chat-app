import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String, // Corrected from "string" to "String"
            required: true,
        },
        password: {
            type: String, // Corrected from "string" to "String"
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String, // Corrected from "string" to "String"
            default: "",
        },
    },
    { timestamps: true } // Corrected "timestamp" to "timestamps"
);

const User = mongoose.model("User", userSchema);

export default User;
