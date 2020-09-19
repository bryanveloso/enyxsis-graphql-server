import { Resolver, Query, Arg } from 'type-graphql'

import { Character } from '../models/Character'

@Resolver()
export class CharacterResolver {
  @Query(() => [Character])
  async characters() {
    return Character.find()
  }

  @Query(() => Character)
  async character(@Arg('name') name: string) {
    return Character.findOne({ where: { name } })
  }

  @Query(() => [Character])
  async online() {
    return Character.find({ where: { online: 1 } })
  }
}
