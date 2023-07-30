const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql(`
type address {
  city: String,
  state: String
}
type profile {
  name: String,
  gender: String
}
type Query {
  address: address,
  profile: profile
}
`)

const address = { city: "Ghaziabad", state: "U.P." }
const profile = { name: "Vishad Tyagi", gender: "Male" }

const resolvers = {
  Query: {
    address() {
      return address
    },
    profile() {
      return profile
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen(4000).then(({url}) => {
  console.log(`server ready at ${url}`)
})