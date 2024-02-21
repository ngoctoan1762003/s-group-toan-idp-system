import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { User } from 'src/modules/user/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';

@Module({
  imports: [
    ConfigModule, // Add ConfigModule to imports
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Add ConfigModule to imports array
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'), // Use configService to get values
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', '123456'),
        database: configService.get('DB_DATABASE', 'learning'),
        synchronize: configService.get('DB_SYNC', true),
        autoLoadEntities: true,
        entities: [User, Role, Permission],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class DatabaseModule {}
