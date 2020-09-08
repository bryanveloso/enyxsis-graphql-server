import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'

import { LoginResolver } from './resolvers/LoginResolver'

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [LoginResolver],
  })
  const server = new ApolloServer({ schema })
  await server.listen(4000)
  console.log('Server has started!')
}

main()
