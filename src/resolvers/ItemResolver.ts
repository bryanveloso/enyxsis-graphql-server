import { Resolver, Query, Arg } from 'type-graphql'

import { Item } from '../models/Item'

@Resolver()
export class ItemResolver {
  @Query(() => [Item])
  async items() {
    return Item.find()
  }

  @Query(() => Item)
  async item(@Arg('id') id: number) {
    return Item.findOne({ id })
  }
}
