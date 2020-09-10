import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'

import { CharacterResolver } from './resolvers/CharacterResolver'
import { LoginResolver } from './resolvers/LoginResolver'

const port = process.env.PORT || 4000

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [CharacterResolver, LoginResolver],
  })
  const server = new ApolloServer({
    schema,
    tracing: true,
  })
  await server.listen(port)
  console.log('Server has started!')
}

main()
