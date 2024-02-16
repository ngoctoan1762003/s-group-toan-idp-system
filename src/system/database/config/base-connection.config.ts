import dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

dotenv.config();

export const connectionConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  database: 'learning',
  synchronize: process.env.DB_SYNC ? process.env.DB_SYNC === 'true' : false,
  logging: true,
  migrationsRun: process.env.DB_MIGRATION_RUN
    ? process.env.DB_MIGRATION_RUN === 'true'
    : true,
};
