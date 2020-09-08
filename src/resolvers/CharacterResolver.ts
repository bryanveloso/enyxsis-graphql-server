import { Resolver, Query, Arg } from 'type-graphql'

import { Character } from '../models/Character'

@Resolver()
export class CharacterResolver {
  @Query(() => [Character])
  characters() {
    return Character.find()
  }
}
