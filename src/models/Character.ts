import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import { Login } from './Login'

@Entity('char')
@ObjectType()
export class Character extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'char_id' })
  id: number

  @Field((type) => Login)
  @ManyToOne((type) => Login)
  @JoinColumn({ name: 'account_id' })
  account: Promise<Login>
}
