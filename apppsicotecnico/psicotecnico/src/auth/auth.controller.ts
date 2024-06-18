/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuth } from './dto/register.dto';
import { LoginAuthDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    console.log(loginAuthDto)
    return this.authService.login(loginAuthDto);
  }
  
  @Post('register')
  register(@Body() registerAuthdto: RegisterAuth){
    console.log(registerAuthdto);
    return this.authService.register(registerAuthdto);
  } 
}
