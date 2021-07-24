import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JWTAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {      
    return this.authService.login(req.user );                    //TOD : return JWT access Token  
  }

  @UseGuards(JWTAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {                // Require a Bearer token , valid token 
    return req.user                        
  }


}
