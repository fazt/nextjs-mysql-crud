import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: parseInt(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    }
})