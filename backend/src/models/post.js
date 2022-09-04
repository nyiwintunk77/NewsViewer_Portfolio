import mongoose from 'mongoose';

const { Schema } = mongoose;

//Schema: DBの形の定義
const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

//Model:Schemaで定義したデータで作業出来るメソッド
const Post = mongoose.model('Post', PostSchema);
export default Post;
