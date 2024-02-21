import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Permission } from 'src/entities/permission.entity';
import { Role } from 'src/entities/role.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { DataSource } from "typeorm";

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'postgres',
    host: configService.get('DB_HOST', 'localhost'), // Use configService to get values
    port: configService.get('DB_PORT', 5432),
    username: configService.get('DB_USERNAME', 'postgres'),
    password: configService.get('DB_PASSWORD', '123456'),
    database: configService.get('DB_DATABASE', 'learning'),
    migrations: ['migrations/**'],
    entities: [User, Role, Permission],
})