import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/modules/user/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUsersDto } from "./dto/create-users.dto";
import { plainToClass } from "class-transformer";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
    //usersRepository: UserRepository
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { 
    }

    async create(user: User): Promise<User> {
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    public async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
        return plainToClass(User, this.usersRepository.findOneBy({ username, password }));
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}