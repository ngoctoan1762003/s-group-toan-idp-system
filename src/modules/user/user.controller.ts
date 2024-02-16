import { Body, Controller, Get, Post, Param, UseFilters } from '@nestjs/common';
import { UserControllerExceptionFilter } from './user.controller.exception';
import { UserService } from './user.service';
import { User } from "src/entities/user.entity";

@Controller('users')
@UseFilters(UserControllerExceptionFilter)
export class UserController {
    constructor(private userService:UserService){

    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
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
