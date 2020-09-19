import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'

import { CharacterResolver } from './resolvers/CharacterResolver'
import { ItemResolver } from './resolvers/ItemResolver'
import { LoginResolver } from './resolvers/LoginResolver'

const port = process.env.PORT || 4000

const main = async () => {
  await createConnection()
  const schema = await buildSchema({
    resolvers: [CharacterResolver, ItemResolver, LoginResolver],
  })
  const server = new ApolloServer({
    schema,
    tracing: true,
  })
  await server.listen(port)
  console.log('Server has started!')
}

main()
