import mongoose from 'mongoose';

// create post schema
const postSchema = mongoose.Schema({ 
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
});

// post message model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

