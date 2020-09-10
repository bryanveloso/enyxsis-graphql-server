const { DB_HOST } = process.env

module.exports = {
  type: 'mysql',
  host: DB_HOST || 'localhost',
  port: 3306,
  username: 'ragnarok',
  password: 'ragnarok',
  database: 'ragnarok',
  synchronize: false,
  entities: ['src/models/*.ts'],
}
