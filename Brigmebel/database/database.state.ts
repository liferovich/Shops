import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize(
  'brigmebel' as string,
  'postgres' as string,
  'qwerty' as string,
  {
    host: 'localhost',
    dialect: 'postgres',
    // u don't need that
    // port: 5433
  }
)
