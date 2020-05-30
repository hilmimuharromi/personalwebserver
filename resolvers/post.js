const postModel = require('../models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const postCreate = async(parent, args, {req}) => {
    console.log(args, 'args=============');
    console.log(req.headers.token, 'req===token======');
    const user = jwt.verify(req.headers.token, process.env.KEYJWT)
    if (user.email === "hilmi@mail.com"){
        const post = await postModel.create(args.input)
        return post
    } 
    console.log(user, '====user======');
    
}

const slugPosts = async(parent, args) => {
    const post = await postModel.findOne({slug: args.slug})
    console.log(post, "=====post=====");
    
    return post
    console.log(args, '====args=====');
    
}

const allPosts = async(parent, args) => {
    const perPage = args.page
    const posts = await postModel.find({})
                    .limit(perPage)
                    .exec()

    return posts
    console.log(args, "args all post");
    
}




module.exports = {
    Mutation: {
        postCreate
    },
    Query: {
        slugPosts,
        allPosts
    }
}

