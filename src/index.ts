import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'

import { CharacterResolver } from './resolvers/CharacterResolver'
import { LoginResolver } from './resolvers/LoginResolver'

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [CharacterResolver, LoginResolver],
  })
  const server = new ApolloServer({ schema })
  await server.listen(4000)
  console.log('Server has started!')
}

main()
