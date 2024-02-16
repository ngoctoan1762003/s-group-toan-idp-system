import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

  async login(username: string, password: string): Promise<boolean> {
    const user = await this.userService.findByUsernameAndPassword(username, password);
    return !!user; // If user is found, login is successful
  }
}
