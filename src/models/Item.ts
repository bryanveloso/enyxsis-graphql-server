import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field, ID, Int } from 'type-graphql'

@Entity('item_db')
@ObjectType()
export class Item extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ name: 'name_japanese' })
  name: string

  @Field((type) => Int)
  @Column()
  type: number

  @Field({ nullable: true })
  @Column({ name: 'price_buy', nullable: true })
  priceBuy: number

  @Field({ nullable: true })
  @Column({ name: 'price_sell', nullable: true })
  priceSell: number

  @Field((type) => Int)
  @Column()
  weight: number

  @Field()
  @Column({ nullable: true })
  attack: number

  @Field()
  @Column({ name: 'defence', nullable: true })
  defense: number

  @Field()
  @Column({ nullable: true })
  range: number

  @Field()
  @Column({ nullable: true })
  slots: number

  @Field()
  @Column({ name: 'equip_jobs', nullable: true })
  equipJobs: string

  @Field()
  @Column({ name: 'equip_upper', nullable: true })
  equipUpper: string

  @Field()
  @Column({ name: 'equip_genders', nullable: true })
  equipGenders: string

  @Field()
  @Column({ name: 'equip_locations', nullable: true })
  equipLocations: string
}
