import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },

        text: {
            type: String,
        },

        Image: {
            type: String,
        },
        Video: {
            type: String,
        }
    },
    { timestamps: true }
); 

const Post = mongoose.model("Post", postSchema);

export default Post;