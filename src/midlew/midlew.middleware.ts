import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class MidlewMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization} = req.headers;
    if(!authorization)throw new HttpException('invalid authorization',HttpStatus.UNAUTHORIZED)
    console.log(req.originalUrl);
    next();
  }
}