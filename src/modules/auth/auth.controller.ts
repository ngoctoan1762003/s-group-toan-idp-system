import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){

    }

    @Post('/login')
    login(@Body() loginData){
        return this.authService.login(loginData.username, loginData.password);
    }

}
