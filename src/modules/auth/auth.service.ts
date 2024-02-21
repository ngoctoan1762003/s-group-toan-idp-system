import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async login(username: string, password: string): Promise<boolean> {
        try {
            const user = await this.userService.findByUsernameAndPassword(username, password);
            
            if (user) {
                return true; // Login successful
            } else {
                throw new UnauthorizedException('Invalid username or password');
            }
        } catch (error) {
            throw new UnauthorizedException('Invalid username or password');
        }
    }
}
