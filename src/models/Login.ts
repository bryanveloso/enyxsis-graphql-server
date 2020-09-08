import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import { Character } from './Character'

export enum LoginGender {
  SERVER = 'S',
  MALE = 'M',
  FEMALE = 'F',
}

@Entity()
@ObjectType()
export class Login extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'account_id' })
  id: number

  @Field()
  @Column({ name: 'userid' })
  username: string

  @Field()
  @Column({ name: 'sex', type: 'enum', enum: LoginGender })
  gender: LoginGender

  @Field()
  @Column({ name: 'logincount' })
  loginCount: number

  @Field((type) => [Character])
  @OneToMany((type) => Character, (character) => character.account)
  characters: Promise<Character[]>
}
