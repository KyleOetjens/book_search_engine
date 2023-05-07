const { AuthenticatioError } = require('apollo-server-express');
const { Book, User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
User: async (parent,{username}) => {
    return User.findOne({username})
}
    },
    Mutation: {

    },
}
module.exports = resolvers;
