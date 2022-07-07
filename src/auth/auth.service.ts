import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signIn() {
    return 'Giriş Başarılı';
  }
  async signUp() {
    return 'Kayıt Başarılı';
  }
}
