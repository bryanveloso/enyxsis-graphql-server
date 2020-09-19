import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import { Character } from './Character'
import { Gender } from '../enums'

@Entity()
@ObjectType()
export class Login extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'account_id' })
  id: number

  @Field()
  @Column({ name: 'userid' })
  username: string

  @Field((type) => Gender)
  @Column({ name: 'sex' })
  gender: Gender

  @Field()
  @Column({ name: 'logincount' })
  loginCount: number

  @Field((type) => [Character])
  @OneToMany((type) => Character, (character) => character.account)
  characters: Promise<Character[]>
}
