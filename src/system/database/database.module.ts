import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: '123456',
        port: 5432,
        database: 'learning',
        synchronize: true,
        autoLoadEntities: true,
        entities: [User, Role, Permission],
    }),
    
  ],
})
export class DatabaseModule {}
