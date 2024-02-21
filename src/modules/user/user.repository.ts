import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
    // constructor(){
    //     super();
    // }

    async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
        return this.findOne({ where: { username, password } });
    }
}
