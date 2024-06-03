import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { COOKIE_SESSION_TOKEN_KEY } from 'src/common/constants/session';
import { AuthService } from './auth.service';
import { REQ_KEY_USER } from './auth.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const session = request.signedCookies[COOKIE_SESSION_TOKEN_KEY];

    if (!session) return false;

    const user = await this.authService.findOneBySession(session);

    if (!user) return false;
    request[REQ_KEY_USER] = user;

    return true;
  }
}