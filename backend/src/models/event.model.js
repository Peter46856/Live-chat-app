import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
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

const Event = mongoose.model("Event", eventSchema);

export default Event;