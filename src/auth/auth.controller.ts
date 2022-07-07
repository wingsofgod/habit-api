import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/signin')
  async signIn(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const data = await this.authService.signIn();

    return response.status(200).json({ message: data });
  }

  @Post('/signup')
  async signUp(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const data = await this.authService.signUp();

    return response.status(200).json({ message: data });
  }
}
