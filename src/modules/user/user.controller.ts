import { Body, Controller, Get, Post, Param, UseFilters } from '@nestjs/common';
import { UserControllerExceptionFilter } from './user.controller.exception';
import { UserService } from './user.service';
import { User } from "./entities/user.entity";
import { CreateUsersDto } from './dto/create-users.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
@UseFilters(UserControllerExceptionFilter)
export class UserController {
    constructor(private readonly userService:UserService){
        
    }

    @Post()
    async create(@Body() user: CreateUsersDto): Promise<User> {
        const userReal = plainToClass(User, user);
        return this.userService.create(userReal);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User | null> {
        return this.userService.findOne(id);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
