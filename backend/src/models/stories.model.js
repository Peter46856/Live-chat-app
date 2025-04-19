import mongoose from "mongoose";
const storiesSchema = new mongoose.Schema(
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

const Stories = mongoose.model("Stories", storiesSchema);

export default Stories;