module.exports = {
  type: 'mysql',
  host: 'database',
  port: 3306,
  username: 'ragnarok',
  password: 'ragnarok',
  database: 'ragnarok',
  synchronize: false,
  entities: ['src/models/*.ts'],
}
