import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    req.user = {
      id: 1,
      roles: ['admin'],
    };

    next();
  }
}
