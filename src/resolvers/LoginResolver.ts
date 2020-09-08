import { Resolver, Query, Arg } from 'type-graphql'

import { Login } from '../models/Login'

@Resolver()
export class LoginResolver {
  @Query(() => [Login])
  logins() {
    return Login.find()
  }

  @Query(() => Login)
  login(@Arg('id') id: string) {
    return Login.findOne({ where: { id } })
  }
}
