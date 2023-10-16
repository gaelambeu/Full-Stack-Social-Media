import mongoose, { Schema } from  "mongoose";

//schema
const commentSchema =  new mongoose.Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "Users" },
        postId: { type: Schema.Types.ObjectId, ref: "Posts" },
        comment: { type: String, required: true },
        from: { type: String, required: true },
    }
);