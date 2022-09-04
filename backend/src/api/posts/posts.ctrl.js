import Post from '../../models/post';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;
export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    console.log('Middleware Activated');
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    return next();
};

// let postId = 1;

// const posts = [
//     {
//         id: 1,
//         title: 'title',
//         body: 'body',
//     },
// ];

export const write = async (ctx) => {
    const { title, body, tags } = ctx.request.body;

    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;

    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            ctx.body = {
                message: 'ポストが存在しません',
            };
            return;
        }
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
    // const post = posts.find((p) => p.id.toString() === id);
};

export const list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const remove = async (ctx) => {
    const { id } = ctx.params;
    // const index = posts.findIndex((p) => p.id.toString() === id);

    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (error) {
        ctx.throw(500, error);
    }

    // posts.splice(index, 1);
    // ctx.status = 204;
};

// export const replace = (ctx) => {
//     const { id } = ctx.params;
//     const index = posts.findIndex((p) => p.id.toString() === id);

//     if (index === -1) {
//         ctx.status = 404;
//         ctx.body = {
//             message: 'ポストが存在しません',
//         };
//         return;
//     }

//     posts[index] = {
//         id,
//         ...ctx.request.body,
//     };
//     ctx.body = posts[index];
// };

export const update = async (ctx) => {
    const { id } = ctx.params;
    // const index = posts.findIndex((p) => p.id.toString() === id);
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, { new: true }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }

    // posts[index] = {
    //     ...posts[index],
    //     ...ctx.request.body,
    // };
};
