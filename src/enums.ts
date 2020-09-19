import { registerEnumType } from 'type-graphql'

export enum Connectivity {
  OFFLINE,
  ONLINE,
}

export enum Gender {
  SERVER = 'S',
  FEMALE = 'F',
  MALE = 'M',
}

registerEnumType(Connectivity, { name: 'Connectivity' })
registerEnumType(Gender, { name: 'Gender' })
