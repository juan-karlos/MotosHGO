const {createPool}=require('mysql2/promise')

PORT = process.env.PORT || 3000
DB_HOST = process.env.DB_HOST || 'localhost'
DB_USER = process.env.DB_USER || 'root'
DB_PASSWORD = process.env.DB_PASSWORD || '123456789'
DB_NAME = process.env.DB_NAME || 'moto_express'
DB_PORT = process.env.DB_PORT || 3306

const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME
})

module.exports = pool
