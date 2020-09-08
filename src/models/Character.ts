import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
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

  @Field()
  @Column({ name: 'char_num' })
  number: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  class: number

  @Field()
  @Column({ name: 'base_level' })
  baseLevel: number

  @Field()
  @Column({ name: 'job_level' })
  jobLevel: number

  @Field()
  @Column()
  zeny: number

  @Field()
  @Column()
  str: number

  @Field()
  @Column()
  agi: number

  @Field()
  @Column()
  vit: number

  @Field()
  @Column()
  int: number

  @Field()
  @Column()
  dex: number

  @Field()
  @Column()
  luk: number

  @Field()
  @Column()
  hp: number

  @Field()
  @Column({ name: 'max_hp' })
  maxHp: number

  @Field()
  @Column()
  sp: number

  @Field()
  @Column({ name: 'max_sp' })
  maxSp: number
}
