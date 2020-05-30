const { gql, AuthenticationError, ForbiddenError } = require('apollo-server-express');
const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCreate = async(parent, args) => {
    console.log(args.input);
    if (args.input.email !== 'hilmi@mail.com'){
        throw new ForbiddenError('email tidak valid')
    }
    const user = await userModel.create({email: args.input.email, password: args.input.password})
    return user 
}

const userLogin = async(parent, args) => {
    console.log(args, 'masuk login');
    const  user = await userModel.findOne({
        email: args.email
    })
    console.log(user,'=====');
    if(!user) {
        throw new AuthenticationError('User Not Found')
    } 
    const matchPassword = bcrypt.compareSync(args.password, user.password)
    console.log(matchPassword,'======');
    if(!matchPassword){
        throw new AuthenticationError('Invalid Credentials')
    }
    let payload = {
        email: user.email,
        id: user._id
    }
    let token = jwt.sign(payload, process.env.KEYJWT)
    let isVerif = jwt.verify(token, process.env.KEYJWT)
    console.log(token,'===========token');
    console.log(isVerif, '=======isverif');
    
    
    return token = {
        token
    }
}

module.exports ={
    Mutation: {
        userCreate
    },
    Query:{
        userLogin
    }
}